import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { notifyError, notifySucess } from '../../utils/notifications';

const defaultForm = {
  name: '',
  email: '',
  telefone: '',
  cpf: '',
  country: {
    id: '',
    name: ''
  },
  city: {
    id: '',
    name: ''
  }
}

function Main() {
  const [form, setForm] = useState({ ...defaultForm });
  const [country, setCoutry] = useState([]);
  const [city, setCity] = useState([]);


  function handleChangeForm({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  function handleChangeSelectCountry({ target }) {
    const currentCountry = country.find((countries) => countries.name_ptbr === target.value);

    if (!currentCountry) {
      return;
    }

    setForm({ ...form, country: { id: currentCountry.id, name: currentCountry.name_ptbr } });
  }

  function handleChangeSelectCity({ target }) {
    const currentCity = city.find((cities) => cities.name_ptbr === target.value);

    if (!currentCity) {
      return;
    }

    setForm({ ...form, city: { id: currentCity.id, name: currentCity.name_ptbr } })
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.country.name || !form.city.name) {
      notifyError('Selecione o seu destino de interesse.');
      return;
    }
    
    const thereIsCity = form.city.name.includes(form.country.name);

    if (!thereIsCity) {
      notifyError('Essa cidade não pertence ao país escolhido.');
      return;
    }

    notifySucess('Destino de interesse armazenado com sucesso!');

    setForm({...defaultForm});
  }

  useEffect(() => {
    async function getCountries() {
      try {
        const allCountries = await api.get('/country');
  
        setCoutry([...allCountries.data]);
        
      } catch (error) {
        notifyError(error.message);
      }
    }

    getCountries();

    async function getCities() {
      try {
        const allCities = await api.get('/city');
  
        setCity([...allCities.data]);
        
      } catch (error) {
        notifyError(error.message);
      }
    }

    getCities();
  }, [])

  return (
    <div className='container'>
      <Header />
      <main>
        <h1>Que tal fazer aquela sonhada viagem?</h1>
        <h2>Pesquise aqui seu possível destino!</h2>
        <div className='container-forms'>
          <form onSubmit={handleSubmit}>
            <div className='container-squares'>
              <div className='content-user'>
                <h3>Dados Pessoais</h3>
                <div className='content-user-data'>
                  <label htmlFor='name'>Nome</label>
                  <input
                    name='name'
                    type='text'
                    value={form.name}
                    onChange={handleChangeForm}
                    required
                  />
                  <label htmlFor='email'>E-mail</label>
                  <input
                    name='email'
                    type='email'
                    value={form.email}
                    onChange={handleChangeForm}
                    required
                  />
                  <label htmlFor='telefone'>Telefone</label>
                  <input
                    name='telefone'
                    type='tel'
                    value={form.telefone}
                    onChange={handleChangeForm}
                    required
                  />
                  <label htmlFor='cpf'>CPF</label>
                  <input
                    name='cpf'
                    type='text'
                    value={form.cpf}
                    onChange={handleChangeForm}
                    required
                  />
                </div>
              </div>
              <div className='content-destinations'>
                <h3>Destinos de Interesse</h3>
                <div className='content-current-destination'>
                  <label>País</label>
                  <select
                    name='country'
                    value={form.country.name}
                    onChange={handleChangeSelectCountry}
                    required
                  >
                    <option>Selecione</option>
                    {country.map((countries) => (
                      <option
                        key={countries.id}
                        value={countries.name_ptbr}
                      >
                        {countries.name_ptbr}
                      </option>
                    ))}
                  </select>
                  <label>Cidade</label>
                  <select
                    name='city'
                    value={form.city.name}
                    onChange={handleChangeSelectCity}
                    required
                  >
                    <option>Selecione</option>
                    {city.map((cities) => (
                      <option
                        key={cities.id}
                        value={cities.name_ptbr}
                      >
                        {cities.name_ptbr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button>ENVIAR</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
