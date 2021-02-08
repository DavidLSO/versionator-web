import React from "react";

import { Container } from "./styles";
import FirmwareForm from "./FirmwareForm";
import ListFirmware from "./ListFirmware";

export default function Dashboard() {
  return (
    <Container>
      <FirmwareForm />
      <ListFirmware />
    </Container>
  );
}
