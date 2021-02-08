import React, { useEffect, useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import { useDispatch } from "react-redux";
import { addFirmwareRequest } from "~/store/modules/firmware/actions";

export default function FirmwareForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  function handleSubmit(data) {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("project_name", data.project_name);
    formData.append("version", data.version);
    formData.append("compatible_card_name", data.compatible_card_name);
    dispatch(addFirmwareRequest(formData));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="project_name" placeholder="Nome do projeto" />
      <Input name="version" placeholder="Version" />
      <Input
        name="compatible_card_name"
        placeholder="Nome da placa compatível"
      />
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button type="submit">Adicionar Firmware</button>
    </Form>
  );
}
