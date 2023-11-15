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

export const EditProfile = () => {
  const user = userStore((state) => state);
  const setUser = userStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    last_name: "",
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
      .put(`/usuariosPut/${uid}`, formData)
      .then((response) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        setError("Hubo un error al actualizar el perfil");
      });
  };

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
          onChange={(value) => handleChange("first_name", value)}
          style={{ marginTop: "16px" }}
        />
        <TextInput
          label="Segundo Nombre"
          placeholder="Segundo Nombre"
          value={formData.second_name}
          onChange={(value) => handleChange("second_name", value)}
          style={{ marginTop: "16px" }}
        />
        <TextInput
          label="Primer Apellido"
          placeholder="Primer Apellido"
          value={formData.last_name}
          onChange={(value) => handleChange("last_name", value)}
          style={{ marginTop: "16px" }}
        />
        <TextInput
          label="Segundo Apellido"
          placeholder="Segundo Apellido"
          value={formData.second_lastname}
          onChange={(value) => handleChange("second_lastname", value)}
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
