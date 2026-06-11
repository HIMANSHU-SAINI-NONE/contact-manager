import React from "react";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const onDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(
        `http://127.0.0.1:5000/delete_contact/${id}`,
        options
      );
      if (response.status === 200) {
        updateCallback();
      } else {
        alert("Failed to delete contact");
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-content">
          <span className="empty-icon">📭</span>
          <h2>No Contacts Yet</h2>
          <p>Click the "Add Contact" button to create your first contact.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contacts-container">
      <div className="contacts-grid">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <div className="contact-card-header">
              <div className="contact-initials">
                {contact.firstName.charAt(0)}
                {contact.lastName.charAt(0)}
              </div>
              <div className="contact-actions">
                <button
                  className="btn-edit"
                  onClick={() => updateContact(contact)}
                  title="Edit contact"
                >
                  ✏️
                </button>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(contact.id)}
                  title="Delete contact"
                >
                  🗑️
                </button>
              </div>
            </div>
            <div className="contact-info">
              <h3 className="contact-name">
                {contact.firstName} {contact.lastName}
              </h3>
              <a href={`mailto:${contact.email}`} className="contact-email">
                {contact.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
