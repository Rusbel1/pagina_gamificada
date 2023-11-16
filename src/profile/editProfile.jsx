import React, { useState } from "react";
import {
  Container,
  TextInput,
  Button,
  Loader,
  Notification,
  Paper,
  Title,
} from "@mantine/core";
import { axiosController } from "../helper/axiosController";
import { userStore } from "../store/UserStore";
import { useEffect } from "react";

export const EditProfile = () => {
  const user = userStore((state) => state);
  const setUser = userStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    first_lastname: "",
    second_lastname: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    axiosController
      .put(`/usuariosPut/${user.id}`, formData)
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        setUser(
          user.id,
          formData.first_name,
          user.points_user
        );
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Hubo un error al actualizar el perfil");
      });
  };

  const getuser = () => {
    axiosController.get(`/usuariosGet/${user.id}`).then((response) => {
/*       setFormData({first_name: response.data[0].first_name,first_lastname: response.data[0].first_lastname,second_name:response.data[0].second_name,second_lastname:response.data[0].second_lastname}); */
      setFormData(response.data[0]);
}
    );
  }
  useEffect(() => {
    getuser()
  }, []);

  return (
    <Container
      size="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper shadow="xs" padding="md" radius="md" style={{ width: "100%" }}>
        <Title order={2} style={{ textAlign: "center" }}>
          Editar Perfil
        </Title>
        {loading && <Loader size={36} />}
        {error && (
          <Notification color="red" title="Error" style={{ marginTop: "16px" }}>
            {error}
          </Notification>
        )}
        {success && (
          <Notification
            color="green"
            title="Éxito"
            style={{ marginTop: "16px" }}
          >
            Perfil actualizado exitosamente.
          </Notification>
        )}
        <TextInput
          label="Primer Nombre"
          placeholder="Primer Nombre"
          value={formData.first_name}
          onChange={(e) => handleChange("first_name", e.target.value)}
          style={{ marginTop: "16px" }}
        />
        <TextInput
          label="Segundo Nombre"
          placeholder="Segundo Nombre"
          value={formData.second_name}
          onChange={(e) => handleChange("second_name",e.target.value)}
          style={{ marginTop: "16px" }}
        />
        <TextInput
          label="Primer Apellido"
          placeholder="Primer Apellido"
          value={formData.first_lastname}
          onChange={(e) => handleChange("first_lastname", e.target.value)}
          style={{ marginTop: "16px" }}
        />
        <TextInput
          label="Segundo Apellido"
          placeholder="Segundo Apellido"
          value={formData.second_lastname}
          onChange={(e) => handleChange("second_lastname", e.target.value)}
          style={{ marginTop: "16px" }}
        />
        <Button
          style={{ marginTop: "16px" }}
          onClick={handleSubmit}
          loading={loading}
          fullWidth
        >
          Guardar Cambios
        </Button>
      </Paper>
    </Container>
  );
};
