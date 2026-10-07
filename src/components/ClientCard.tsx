import  { type Client } from '../api/clients';

export function ClientCard(client: Client) {
    return (
        <div key={client.id} className='clientCard'>
            <div>{client.name}</div>
            <div>{client.owner_email}</div>
        </div>
    );
}