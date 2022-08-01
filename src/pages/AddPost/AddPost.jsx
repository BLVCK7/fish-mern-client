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
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { setPost, setFish } from '../../redux/slices/PostSlice';
import axios from 'axios';
import Fish from '../../components/Fish/Fish';
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent';

const AddPost = () => {
  const { fish, fishingDate } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  const [textMDE, setTextMDE] = React.useState('');

  const [name, setPostName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [temperature, setTemperature] = React.useState(20);
  const [windDirection, setWindDirection] = React.useState('Северный');
  const [windPower, setWindPower] = React.useState('Штиль');
  const [pressure, setPressure] = React.useState(745);
  const [fishName, setFishName] = React.useState('Судак');
  const [fishWeight, setFishWeight] = React.useState(100);

  const [id, setId] = React.useState(1);

  const onAddFish = () => {
    dispatch(setFish({ id, fishName, fishWeight }));
    setId(id + 1);
  };

  const fields = {
    name,
    location,
    temperature,
    windDirection,
    windPower,
    pressure,
    fish,
    fishingDate,
  };

  const onSumbitPost = async () => {
    await axios.post(`http://localhost:5000/post`, fields);
  };

  const optionsMDE = React.useMemo(
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

  const onChangeMDE = React.useCallback((value) => {
    setTextMDE(value);
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
        <TextField
          onChange={(e) => setPostName(e.target.value)}
          label="Название поста"
          color="primary"
          // focused
          autoComplete="off"
          sx={{ width: '50%' }}
        />
        <Typography variant="h6" color="#000">
          Дата рыбалки {fishingDate ? `- ${fishingDate}` : ''}
        </Typography>

        <CalendarComponent />

        <TextField
          onChange={(e) => setLocation(e.target.value)}
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
            onChange={(e) => setTemperature(e.target.value)}
            marks={temperatureMarks}
            sx={{ ml: '10px' }}
            defaultValue={20}
            min={-30}
            max={40}
            aria-label="Temperature"
            valueLabelDisplay="auto"
          />
        </Box>

        <Stack direction="row">
          <FormControl sx={{ m: 1, width: '180px' }}>
            <InputLabel htmlFor="grouped-native-select">Направление ветра</InputLabel>
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              label="wind"
              onChange={(e) => setWindDirection(e.target.value)}>
              <option value={'Северный'}>Северный</option>
              <option value={'Восточный'}>Восточный</option>
              <option value={'Южный'}>Южный</option>
              <option value={'Западный'}>Западный</option>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: '180px' }}>
            <InputLabel htmlFor="grouped-native-select">Сила ветра</InputLabel>
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              label="wind"
              onChange={(e) => setWindPower(e.target.value)}>
              <option value={'Штиль'}>Штиль</option>
              <option value={'1 м/c'}>1 м/c</option>
              <option value={'2 м/c'}>2 м/c</option>
              <option value={'3 м/c'}>3 м/c</option>
              <option value={'4 м/c'}>4 м/c</option>
              <option value={'5+ м/c'}>5+ м/c</option>
            </Select>
          </FormControl>
        </Stack>

        <Typography variant="h6" color="#000">
          Атмосферное давление
        </Typography>
        <Box width={300}>
          <Slider
            onChange={(e) => setPressure(e.target.value)}
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
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="fishName"
            onChange={(e) => setFishName(e.target.value)}>
            <option value={'Судак'}>Судак</option>
            <option value={'Щука'}>Щука</option>
            <option value={'Окунь'}>Окунь</option>
            <option value={'Голавль'}>Голавль</option>
            <option value={'Жерех'}>Жерех</option>
          </Select>
        </FormControl>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Typography color="#000" sx={{ pr: '10px', fontSize: '12px' }}>
            Вес рыбы:
          </Typography>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              onChange={(e) => setFishWeight(e.target.value)}
              value={fishWeight}
              endAdornment={<InputAdornment position="end">гр</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              autoComplete="off"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </FormControl>
          <ToggleButton value="check" onClick={onAddFish}>
            <AddOutlinedIcon />
          </ToggleButton>
        </Stack>

        {/* <SimpleMDE className="editor" value={textMDE} onChange={onChangeMDE} options={optionsMDE} /> */}
      </Stack>
      {fish.map((obj, index) => (
        <Fish obj={obj} id={obj.id} key={obj.id} />
      ))}
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button variant="contained" color="primary" onClick={onSumbitPost}>
          Опубликовать пост
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddPost;
