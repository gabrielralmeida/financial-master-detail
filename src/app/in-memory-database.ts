
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categoria } from './pages/categorias/Shared/categoria.model';


export class inMememoryDatabase implements InMemoryDbService {
  createDb() {
    const categorias: Categoria[] = [
      { id: 1, nome: 'Modaria', descricao: 'descricao primeira categoria' },
      { id: 2, nome: 'Saúde', descricao: 'descricao primeira categoria' },
      { id: 3, nome: 'Lazer', descricao: 'descricao primeira categoria' },
      { id: 4, nome: 'Salário', descricao: 'descricao primeira categoria' },
      { id: 5, nome: 'Freelas', descricao: 'descricao primeira categoria' }
    ]
    return { categorias }
  }
}
