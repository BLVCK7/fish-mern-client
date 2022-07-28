import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import './AddPost.scss';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  Slider,
  Stack,
  TextField,
  ToggleButton,
  Typography,
} from '@mui/material';
import TimePicker from '../../components/DatePicker/DatePicker';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const AddPost = () => {
  const [text, setText] = React.useState('');
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [selected, setSelected] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '250px',
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

  const marks = [
    {
      value: 730,
      label: '730',
    },
    {
      value: 760,
      label: '760',
    },
  ];

  const temperatureMarks = [
    {
      value: -30,
      label: '-30°C',
    },
    {
      value: 40,
      label: '40°C',
    },
  ];

  return (
    <Stack
      direction="column"
      sx={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', mb: '20px' }}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Typography variant="h5" color="#000">
          Добавить новый отчёт о рыбалке
        </Typography>
      </Stack>

      <Stack direction="column" justifyContent="flex-start">
        <Typography variant="h6" color="#000">
          Название поста
        </Typography>
        <TextField
          label="Название поста"
          color="primary"
          // focused
          autoComplete="off"
          sx={{ width: '50%' }}
        />
        <Typography variant="h6" color="#000">
          Дата рыбалки
        </Typography>
        <TimePicker />
        <Typography variant="h6" color="#000">
          Локация
        </Typography>
        <TextField
          label="Локация"
          color="primary"
          // focused
          autoComplete="off"
          sx={{ width: '50%' }}
        />
        <Typography variant="h6" color="#000">
          Температура воздуха
        </Typography>
        <Box width={300}>
          <Slider
            marks={temperatureMarks}
            sx={{ ml: '10px' }}
            defaultValue={20}
            min={-30}
            max={40}
            aria-label="Temperature"
            valueLabelDisplay="auto"
          />
        </Box>
        <Typography variant="h6" color="#000">
          Ветер и его направление
        </Typography>
        <Stack direction="row">
          <FormControl sx={{ m: 1, width: '180px' }}>
            <InputLabel htmlFor="grouped-native-select">Направление ветра</InputLabel>
            <Select native defaultValue="" id="grouped-native-select" label="wind">
              <option value={1}>Северный</option>
              <option value={2}>Восточный</option>
              <option value={3}>Южный</option>
              <option value={4}>Западный</option>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: '180px' }}>
            <InputLabel htmlFor="grouped-native-select">Сила ветра</InputLabel>
            <Select native defaultValue="" id="grouped-native-select" label="wind">
              <option value={1}>Штиль</option>
              <option value={2}>1 м/c</option>
              <option value={3}>2 м/c</option>
              <option value={4}>3 м/c</option>
              <option value={5}>4 м/c</option>
              <option value={6}>5+ м/c</option>
            </Select>
          </FormControl>
        </Stack>

        <Typography variant="h6" color="#000">
          Атмосферное давление
        </Typography>
        <Box width={300}>
          <Slider
            marks={marks}
            sx={{ ml: '10px' }}
            defaultValue={745}
            min={730}
            max={760}
            aria-label="Pressure"
            valueLabelDisplay="auto"
          />
        </Box>
        <Typography variant="h6" color="#000">
          Пойманная рыба
        </Typography>
        <FormControl sx={{ m: 1, width: '200px' }}>
          <InputLabel htmlFor="grouped-native-select">Вид рыбы</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="fishName">
            <option value={1}>Судак</option>
            <option value={2}>Щука</option>
            <option value={3}>Окунь</option>
            <option value={4}>Голавль</option>
            <option value={5}>Жерех</option>
          </Select>
        </FormControl>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Typography color="#000" sx={{ pr: '10px', fontSize: '12px' }}>
            Вес рыбы:
          </Typography>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">гр</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </FormControl>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}>
            <AddOutlinedIcon />
          </ToggleButton>
        </Stack>

        {/* <SimpleMDE className="editor" value={text} onChange={onChange} options={options} /> */}
      </Stack>

      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button variant="contained" color="primary">
          Опубликовать пост
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddPost;
