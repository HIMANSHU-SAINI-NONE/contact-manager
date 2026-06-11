import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/contacts");
      const data = await response.json();
      setContacts(data.contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact({});
  };

  const openCreateModal = () => {
    if (!isModalOpen) {
      setCurrentContact({});
      setIsModalOpen(true);
    }
  };

  const openEditModal = (contact) => {
    if (isModalOpen) return;
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  const onUpdate = () => {
    closeModal();
    fetchContacts();
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Contact Manager</h1>
        <p>Manage your contacts efficiently</p>
        <button className="btn-primary" onClick={openCreateModal}>
          + Add New Contact
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading contacts...</div>
      ) : (
        <ContactList
          contacts={contacts}
          updateContact={openEditModal}
          updateCallback={onUpdate}
        />
      )}

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-container">
              <div className="modal-left">
                <h2>General Information</h2>
                <ContactForm
                  existingContact={currentContact}
                  updateCallback={onUpdate}
                />
              </div>
              <div className="modal-right">
                <button className="btn-close" onClick={closeModal}>
                  ✕
                </button>
                <h2>Contact Details</h2>
                <div className="contact-preview">
                  {Object.entries(currentContact).length !== 0 ? (
                    <>
                      <div className="preview-item">
                        <strong>Name:</strong>
                        <p>
                          {currentContact.firstName} {currentContact.lastName}
                        </p>
                      </div>
                      <div className="preview-item">
                        <strong>Email:</strong>
                        <p>{currentContact.email}</p>
                      </div>
                      <div className="preview-item">
                        <strong>ID:</strong>
                        <p>{currentContact.id}</p>
                      </div>
                    </>
                  ) : (
                    <p>Fill in the form to see contact details</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
