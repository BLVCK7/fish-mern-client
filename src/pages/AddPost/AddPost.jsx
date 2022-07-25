import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import './AddPost.scss';
import { Button, FormControl, TextField, Typography } from '@mui/material';

const AddPost = () => {
  const [text, setText] = React.useState('');

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '350px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  console.log(text);

  return (
    <>
      <Typography variant="h5" color="secondary.contrastText">
        Добавить новый отчёт о рыбалке
      </Typography>
      <FormControl>
        <TextField
          type="search"
          label="Название поста"
          placeholder="Название поста"
          name="postName"
          size="small"
          variant="outlined"
          color="info"
          margin="dense"
          autoComplete="off"
          required
          fullWidth
        />
        <TextField
          type="search"
          label="Локация"
          placeholder="Локация"
          name="location"
          size="small"
          variant="outlined"
          color="info"
          margin="dense"
          autoComplete="off"
          required
          fullWidth
        />
      </FormControl>
      <SimpleMDE className="editor" value={text} onChange={onChange} options={options} />
      <Button variant="contained" color="primary">
        Опубликовать пост
      </Button>
    </>
  );
};

export default AddPost;
