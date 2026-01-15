export default function UserViewModal({ isOpen, onClose, user }) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      <div className="relative bg-white p-6 rounded w-[420px]">
        <h2 className="text-xl font-bold mb-4">
          Détails de l’utilisateur
        </h2>

        <p><b>Nom :</b> {user.name}</p>
        <p><b>Email :</b> {user.email}</p>
        <p><b>Téléphone :</b> {user.phone}</p>

        <p>
          <b>Adresse :</b>{" "}
          {user.address?.street}, {user.address?.city}
        </p>

        {user.username && (
          <p><b>Nom d’utilisateur :</b> {user.username}</p>
        )}

        {user.website && (
          <p><b>Site web :</b> {user.website}</p>
        )}

        {user.company?.name && (
          <p><b>Entreprise :</b> {user.company.name}</p>
        )}

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
