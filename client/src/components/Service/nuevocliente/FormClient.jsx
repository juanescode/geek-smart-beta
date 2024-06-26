import {
  PlusCircleFilled,
  QuestionCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  FloatButton,
} from "antd";
import Axios from "axios";
const { Option } = Select;

export const FormCient = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [servicio, setServicio] = useState("");
  const [dispositivo, setDispositivo] = useState("");

  const [numerocli, setNumerocli] = useState("");
  const [precioser, setPrecioser] = useState("");

  const [descripcionser, setDescripcion] = useState("");

  


  const AgregarCliente = (e) => {










    

    }
  //   e.preventDefault()
  //   Axios.post('http://localhost:3001', {
  //     nombre: nombre,
  //     categoria: categoria,
  //     precio: precio
  //   }).then(()=>{
  //     setNombre('')
  //     setCategoria('')
  //     setPrecio('')
  //   })
  // }


  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Valor seleccionado:", selectedValue);
    setCategoria(selectedValue); // Actualiza el estado con el valor seleccionado
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="nombrecli"
              label="Nombre completo del cliente:"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el nombre del cliente",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
                placeholder="Nombre del cliente"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="categoria" label="Categoria:" rules={[]}>
              <select onChange={handleSelectChange}>
                <option value="Telefonos">Telefonos</option>
                <option value="Pc">Pc</option>
                <option value="otros">otros</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="Tipodeservicio"
              label="Tipo de servicio:"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el tipo de servicio",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setServicio(event.target.value);
                }}
                placeholder="Tipo de servicio"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="dispositivo"
              label="Tipo de dispositivo"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el Tipo de dispositivo",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setDispositivo(event.target.value);
                }}
                placeholder="Tipo de dispositivo"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="numerocliente"
              label="Numero de telefono:"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresar el numero de cliente",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setNumerocli(event.target.value);
                }}
                style={{
                  width: "100%",
                }}
                addonBefore="+54"
                placeholder=" Ingresar numero de telefono"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="precio" label="Precio del servicio:" rules={[]}>
              <Input
                onChange={(event) => {
                  setPrecio(event.target.value);
                }}
                style={{
                  width: "100%",
                }}
                placeholder="Precio del servicio"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Descricion"
              rules={[
                {
                  required: true,
                  message: "Direccion del telefono",
                },
              ]}
            >
              <Input.TextArea
                onChange={(event) => {
                  setDescripcion(event.target.value);
                }}
                rows={4}
                placeholder="por favor ingresar la descripcion"
              />
            </Form.Item>
          </Col>
        </Row>
        <Button onClick={AgregarCliente} type="primary">
          Agregar
        </Button>
      </Form>
    </>
  );
};
