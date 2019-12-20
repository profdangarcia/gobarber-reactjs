import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';
import api from '~/services/api';
import defaultAvatar from '~/assets/default-avatar.png';

export default function AvatarInput() {
  // o formulario já possui um initialData sendo um dos campos o avatar
  // o useField da lib Unform pode receber o campo especificado
  // retorna dois parametros o defaultValue e o registerField
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  // esse é o useEffect para fazer com que o Unform reconheça o Input de File
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    // FormData é o multipartform que será enviado
    const data = new FormData();
    // adicionando no campo file o arquivo que vem do input em um vetor
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview || defaultAvatar} alt="" />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
          // o Unform precisa da referencia do Input e de qual valor deve receber
          ref={ref}
          data-file={file}
        />
      </label>
    </Container>
  );
}
