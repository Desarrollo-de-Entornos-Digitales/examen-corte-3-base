export type Sender = 'me' | 'them';

export interface Message {
    id: number;
    text: string;
    time: string;
    sender: Sender;
}

export interface Contact {
    id: number;
    name: string;
    status: string;
    messages: Message[];
}

export const initialChats: Contact[] = [
    {
        id: 1,
        name: 'Alice Johnson',
        status: 'Designer · Available',
        messages: [
            { id: 1, text: 'Hey! How are you?', time: '10:20', sender: 'them' },
            { id: 2, text: 'All good, working on the new mockups.', time: '10:22', sender: 'me' },
            { id: 3, text: "Can't wait to see them 🎨", time: '10:24', sender: 'them' },
        ],
    },
    {
        id: 2,
        name: 'Bob Martinez',
        status: 'Backend dev · Busy',
        messages: [
            { id: 4, text: 'Did you push the API changes?', time: '09:01', sender: 'them' },
            { id: 5, text: 'Yes, take a look when you can.', time: '09:05', sender: 'me' },
            { id: 6, text: 'See you at the standup.', time: '09:06', sender: 'them' },
        ],
    },
    {
        id: 3,
        name: 'Carol Smith',
        status: 'Coffee enthusiast ☕',
        messages: [
            { id: 7, text: 'Lunch tomorrow?', time: 'Yesterday', sender: 'them' },
            { id: 8, text: 'Sure, the usual place?', time: 'Yesterday', sender: 'me' },
        ],
    },
    {
        id: 4,
        name: 'David Lee',
        status: 'Traveling ✈️',
        messages: [
            { id: 9, text: 'Just landed in Tokyo!', time: 'Mon', sender: 'them' },
            { id: 10, text: 'Amazing! Send pics.', time: 'Mon', sender: 'me' },
            { id: 11, text: 'Will do 📸', time: 'Mon', sender: 'them' },
        ],
    },
    {
        id: 5,
        name: 'Emma Wilson',
        status: 'PM · In a meeting',
        messages: [
            { id: 12, text: 'Roadmap looks great.', time: 'Sun', sender: 'me' },
            { id: 13, text: "Thanks! Let's review Friday.", time: 'Sun', sender: 'them' },
        ],
    },
];
