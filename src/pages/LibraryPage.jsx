import { useState } from "react";
import { Form, Popconfirm, Table, Typography, Space } from "antd";
import EditableRow from "../components/EditableRow";
import { createBook, deleteBook, getBooks, editBook } from "../api/library";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const LibraryPage = () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const queryClient = useQueryClient();

  const { data: books } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const mutationEdit = useMutation({
    mutationFn: (book) => editBook(book),
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  const mutationCreate = useMutation({
    mutationFn: (book) => createBook(book),
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: (id) => deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ title: "", price: "", ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
    form.resetFields();
  };

  const saveEdited = async () => {
    const row = await form.validateFields();

    if (editingKey === "0") {
      mutationCreate.mutate(row);
    } else {
      mutationEdit.mutate({ ...row, key: editingKey });
    }

    setEditingKey("");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      editable: true,
    },
    {
      title: "Title",
      dataIndex: "title",
      editable: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      editable: true,
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={saveEdited}
              style={{ marginInlineEnd: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : record.key === 0 ? (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => {
              form.resetFields();
              setEditingKey("0");
              edit(record);
            }}
          >
            Create
          </Typography.Link>
        ) : (
          <Space size="middle">
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => mutationDelete.mutate(record.id)}
            >
              Delete
            </Typography.Link>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const dataSource = [
    ...(books?.map((book) => ({ ...book, key: book.id })) || []),
    { title: "", id: "", price: "", key: 0 },
  ];

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: { cell: EditableRow },
        }}
        bordered
        dataSource={dataSource}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{ onChange: cancel }}
      />
    </Form>
  );
};

export default LibraryPage;
