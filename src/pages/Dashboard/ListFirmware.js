import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdFileDownload } from "react-icons/md";
import { getFirmwareRequest } from "~/store/modules/firmware/actions";
import { ContainerList } from "./styles";

export default function ListFirmware() {
  const firmware = useSelector((state) => state.firmware.firmware);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFirmwareRequest());
  }, [dispatch]);

  return (
    <ContainerList>
      <table>
        <thead>
          <tr>
            <th>Projeto</th>
            <th>Versão</th>
            <th>Nome da Placa</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {firmware.map((item) => (
            <tr>
              <td>{item.project_name}</td>
              <td>{item.version}</td>
              <td>{item.compatible_card_name}</td>
              <td>
                <div>
                  <a href={item.file}>
                    <MdFileDownload color="#e76f51" size={20} />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContainerList>
  );
}
