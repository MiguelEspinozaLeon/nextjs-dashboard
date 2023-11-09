export async function GET(){
    return Response.json({message: 'Hello'})
}

export async function POST(request: Request){
    const data = await request.json()
    console.log(data.name)
    return Response.json(data)
}
