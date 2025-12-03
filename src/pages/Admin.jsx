import GestionDeProductos from '../components/GestionDeProductos';
import { AdminPage, AdminTitle } from '../ui/AdminLayout';

const Admin = () => {
  return (
    <AdminPage aria-label="Panel de administración">
      <AdminTitle>Panel de Administración</AdminTitle>
      <GestionDeProductos />
    </AdminPage>
  );
};

export default Admin;