export const getAllContacts = ({contacts}) => contacts.items;

// export const getMainContacts = ({contacts}) => {
// const mainСontacts = contacts.items.filter(({ main }) => main);
//     return mainСontacts;
// }
// export const getFilteredContacts = ({contacts, filter}) => {
//     if (!filter) {
//        console.log(contacts.items)
//     }
//     const normalizedFilter = filter.toLowerCase();
//     const result = contacts.items.filter(({ name }) => {
//         return name.toLowerCase().includes(normalizedFilter);
//     });
//     return result;
// }
export const getMainContacts = ({contacts}) => {
    if (!contacts || !contacts.items) {
        return [];
    }
    const mainContacts = contacts.items.filter(({ main }) => main);
    return mainContacts;
}

export const getFilteredContacts = ({contacts, filter}) => {
    if (!contacts || !contacts.items) {
        return [];
    }
    if (!filter) {
        return contacts.items
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({ name }) => {
        return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
}