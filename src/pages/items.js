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
        title: 'Contacts',
        link: "/contacts",
        private:true
    },
                  
]

export default items