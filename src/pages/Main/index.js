import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Main() {
  return (
    <div className='container'>
      <Header />
      <main>
        <h1>Que tal fazer aquela sonhada viagem?</h1>
        <h2>Pesquise aqui seu possível destino!</h2>
        <div className='container-forms'>
          <form>
            <div className='container-squares'>
              <div className='content-user'>
                <h3>Dados Pessoais</h3>
                <div className='content-user-data'>
                  <label htmlFor='name'>Nome</label>
                  <input
                    type='text'
                    name='name'
                    required
                  />
                  <label htmlFor='email'>E-mail</label>
                  <input
                    type='email'
                    name='email'
                    required
                  />
                  <label htmlFor='telefone'>Telefone</label>
                  <input
                    type='tel'
                    name='telefone'
                    required
                  />
                  <label htmlFor='cpf'>CPF</label>
                  <input
                    type='text'
                    name='cpf'
                    required
                  />
                </div>
              </div>
              <div className='content-destinations'>
                <h3>Destinos de Interesse</h3>
                <div className='content-current-destination'>
                  <label>País</label>
                  <select required>
                    <option>Selecione</option>
                  </select>
                  <label>Cidade</label>
                  <select required>
                    <option>Selecione</option>
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
