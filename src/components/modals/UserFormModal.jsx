export default function UserFormModal({
  isOpen,
  onClose,
  onSubmit,
  form,
  setForm,
  isEdit,
}) {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setForm({
        ...form,
        address: { ...form.address, [field]: value },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      <div className="relative bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">
          {isEdit ? "Modifier l’utilisateur" : "Ajouter un utilisateur"}
        </h2>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nom"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Téléphone"
            className="w-full border p-2 rounded"
          />

          <input
            name="address.street"
            value={form.address.street}
            onChange={handleChange}
            placeholder="Rue"
            className="w-full border p-2 rounded"
          />

          <input
            name="address.city"
            value={form.address.city}
            onChange={handleChange}
            placeholder="Ville"
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
            >
              Annuler
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {isEdit ? "Modifier" : "Enregistrer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
