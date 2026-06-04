// 'use server'
// const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// export const createJob = async (newJobData) => {
//     const res = await fetch(`${baseUrl}/api/jobs`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newJobData)
//     });
//     return res.json();
// }

'use server'

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const createJob = async (newJobData) => {
    try {
        const res = await fetch(`${baseUrl}/api/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJobData),
            cache: 'no-store',
        });

        if (!res.ok) {
            const error = await res.json();
            return { message: error?.message || 'Server error. Please try again.' };
        }

        return res.json(); // { insertedId, acknowledged }
    } catch (err) {
        return { message: 'Could not connect to server. Please try again.' };
    }
};