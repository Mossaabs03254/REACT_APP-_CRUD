import { useEffect, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

import Pagination from "./Pagination";
import UserFormModal from "./modals/UserFormModal";
import UserViewModal from "./modals/UserViewModal";
import DeleteConfirmModal from "./modals/DeleteConfirmModal";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
    },
  });

 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

 
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(
    filteredUsers.length / usersPerPage
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser =
    indexOfLastUser - usersPerPage;

  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const openAdd = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      address: { street: "", city: "" },
    });
    setIsEdit(false);
    setIsFormOpen(true);
  };

  const openEdit = (user) => {
    setForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address || {
        street: "",
        city: "",
      },
    });
    setCurrentId(user.id);
    setIsEdit(true);
    setIsFormOpen(true);
  };

  const openView = (user) => {
    setSelectedUser(user);
    setIsViewOpen(true);
  };

  const openDelete = (user) => {
    setSelectedUser(user);
    setIsDeleteOpen(true);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit && currentId) {
      setUsers(
        users.map((u) =>
          u.id === currentId ? { ...u, ...form } : u
        )
      );
    } else {
      setUsers([...users, { id: Date.now(), ...form }]);
    }

    setIsFormOpen(false);
  };

  const handleDelete = () => {
    setUsers(users.filter((u) => u.id !== selectedUser.id));
    setIsDeleteOpen(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
   
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          Gestion des utilisateurs
        </h2>

        <button
          onClick={openAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ajouter
        </button>
      </div>

      <input
        type="text"
        placeholder="Rechercher par nom..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="mb-4 w-full border p-2 rounded"
      />

 
      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Nom</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Téléphone</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.phone}</td>

              <td className="p-3 flex gap-3 justify-center">
                <button
                  onClick={() => openView(user)}
                  className="text-blue-600"
                >
                  <Eye size={20} />
                </button>

                <button
                  onClick={() => openEdit(user)}
                  className="text-green-600"
                >
                  <Pencil size={20} />
                </button>

                <button
                  onClick={() => openDelete(user)}
                  className="text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />


      <UserFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
        form={form}
        setForm={setForm}
        isEdit={isEdit}
      />

      <UserViewModal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        user={selectedUser}
      />

      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
