import connectToDB  from "../../../lib/mongoDB";
import User from "../../../lib/models/User";
import bcrypt from 'bcrypt';

connectToDB();

export async function POST(request) {

    const { email, password,phone } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new Response(data, {
            message: 'Email is already taken',
            status: 400,
        });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Data ', email, '   ', password, '   ', hashedPassword);

    // If user is created successfully, return a success message
    const users = await User.create({ email, password: hashedPassword,phone });

    let data = JSON.stringify(users);
    console.log('users ', users);
    return new Response(data, {
        status: 200,
    });

}