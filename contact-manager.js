class ContactManager {
    constructor() {
        // Inisialisasi contacts dari localStorage
        this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    }

    // Metode untuk menambah kontak
    addContact(name, email, phone) {
        const newContact = {
            id: Date.now(), // Buat ID unik
            name, 
            email, 
            phone
        };

        // Tambahkan ke array contacts
        this.contacts.push(newContact);

        // Simpan ke localStorage
        this.saveContacts();

        return newContact;
    }

    // Metode untuk menyimpan kontak ke localStorage
    saveContacts() {
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }

    // Metode untuk mendapatkan semua kontak
    getAllContacts() {
        return this.contacts;
    }

    // Metode untuk menghapus kontak
    deleteContact(id) {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        this.saveContacts();
    }

    // Metode untuk mengedit kontak
    editContact(id, updatedContact) {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            this.contacts[index] = { ...this.contacts[index], ...updatedContact };
            this.saveContacts();
        }
    }

    // Metode untuk mencari kontak
    searchContacts(query) {
        return this.contacts.filter(contact => 
            contact.name.toLowerCase().includes(query.toLowerCase()) ||
            contact.email.toLowerCase().includes(query.toLowerCase()) ||
            contact.phone.toLowerCase().includes(query.toLowerCase())
        );
    }
}

// Buat instance ContactManager
const contactManager = new ContactManager();