const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {" "}
            <span className="font-normal normal-case">Max</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {" "}
            <span className="font-normal normal-case">Juan Pablo</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {" "}
            <span className="font-normal normal-case">juan@juan.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: {" "}
            <span className="font-normal normal-case">10 Diciembre de 2022</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {" "}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto iure repudiandae sint odit est consequuntur repellendus dolorem excepturi deleniti natus veritatis aliquid, deserunt quaerat dolore dignissimos quisquam tenetur enim.</span>
        </p>
    </div>
  )
}

export default Paciente
