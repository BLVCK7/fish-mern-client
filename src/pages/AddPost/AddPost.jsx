import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import './AddPost.scss';

const AddPost = () => {
  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
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

  return (
    <div className="add-post">
      <h1>Добавить новый отчёт о рыбалке</h1>
      <SimpleMDE className="editor" options={options} />
    </div>
  );
};

export default AddPost;
