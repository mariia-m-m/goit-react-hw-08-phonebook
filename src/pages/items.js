import { nanoid } from 'nanoid'

const items = [
    {
        id: nanoid(3),
        title: 'Phonebook',
        link: "/",
        private:false
    },
        {
        id: nanoid(3),
        title: 'Main Contacts',
        link: "/main_contacts",
        private:true
    },
                  
]

export default items