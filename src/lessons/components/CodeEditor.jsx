import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
import { parseScript } from "esprima";
import { Alert, Button, Flex } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export const CodeEditor = ({ content, onCanCanjear }) => {
  const [code, setCode] = useState(content);
  const [error, setError] = useState();

  function onChange(newValue) {
    setCode(newValue);
  }

  function checkSyntax(code) {
    try {
      parseScript(code);
      setError();
      onCanCanjear(true);
    } catch (error) {
      setError(error);
      onCanCanjear(false);
    }
  }

  const onVerifyCode = () => {
    checkSyntax(code);
  };

  useEffect(() => {
    checkSyntax();
  }, []);

  return (
    <>
      <AceEditor
        value={code}
        width="100%"
        mode="javascript"
        theme="xcode"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={24}
      />

      <Flex justify="space-between" mt={12}>
        <Button size="sm" color="blue" onClick={() => onVerifyCode()}>
          Comprobar codigo
        </Button>
      </Flex>

      {error ? (
        <Alert
          mt={12}
          icon={<IconAlertCircle size="1rem" />}
          title={`Hay un error en la linea ${error.lineNumber}`}
          color="red"
        >
          {error.description} :
        </Alert>
      ) : (
        <Alert
          mt={12}
          icon={<IconAlertCircle size="1rem" />}
          title={`No hay errores en el codigo`}
          color="green"
        ></Alert>
      )}
    </>
  );
};
