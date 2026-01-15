export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      <div className="relative bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-3 text-red-600">
          Confirmation
        </h2>

        <p className="mb-4">
          Êtes-vous sûr de vouloir supprimer cet utilisateur ?
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded"
          >
            Annuler
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
