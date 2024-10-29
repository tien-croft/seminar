import "./App.css";

const contacts = [
  { id: 1, firstName: "Cho", lastName: "Seoungyoon" },
  { id: 2, firstName: "Cho", lastName: "Suah" },
  { id: 3, firstName: "Trinh", lastName: "Quang Tien" },
];

function App() {
  return (
    <>
      <h1>Tenaries Demo</h1>
      <div className="card">
        <h2>Contact List 1 ('&&')</h2>
        <ContactList1 contacts={contacts} />
        <h3>However, if contacts is an empty array</h3>
        <ContactList1 contacts={[]} />
      </div>
      <div className="card">
        <h2>Contact List 2 (Tenaries - '?' and ':')</h2>
        <ContactList2 contacts={contacts} />
        <h3>If contacts is an empty array</h3>
        <ContactList2 contacts={[]} />
      </div>
      <div>
        <h2>Contact List 3 (Recommend)</h2>
        <ContactList3 contacts={contacts} />
        <h3>If contacts is an empty array</h3>
        <ContactList3 contacts={[]} />
      </div>
    </>
  );
}

function ContactList1({ contacts }) {
  return (
    <ul>
      {contacts.length &&
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
}

function ContactList2({ contacts }) {
  return (
    <ul>
      {contacts.length ?
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      : null}
    </ul>
  );
}

function ContactList3({ contacts }) {
  if (!contacts) return null;
  if (!contacts.length) return null;

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

function Contact({ contact }) {
  return (
    <li>
      {contact.firstName} {contact.lastName}
    </li>
  );
}

export default App;

// const a1 = b1 ? c1 : d1;
//
// let a2;
// if (b2) a2 = c2;
// else a2 = d2;

// const animalName =
//   pet.canSqueak() ? "mouse"
//   : pet.canBark() ?
//     pet.isScary() ?
//       "wolf"
//     : "dog"
//   : pet.canMeow() ? "cat"
//   : pet.canSqueak() ? "mouse"
//   : "probably a bunny";
