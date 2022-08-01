console.log("tucson");
//U1
let ciencia = "ciencia"
let objetoDeEstudio = "objeto de estudio"
let metodo = "como se accede al " + objetoDeEstudio + ""
objetoDeEstudio = "Aquello que una " + ciencia + "estudia"
ciencia = "Forma de conocimiento sistematizado de la realidad; recorta un " + objetoDeEstudio + "y construye un" + metodo + "mediante el cual logra formular leyes generales que describen, explican y predicen los fenomenos de los que se ocupa."
let epistemologia = "El estudio de las teorias del conocimiento cientifico, su construccion, elementos de validacion y desarrollo."
let paradigma = "Es una realizacion cientifica universalmente reconocida que durante cierto tiempo proporciona modelos de problemas y soluciones planteados por la comunidad cientifica."
let psicologia = "ciencia que estudia los aspectos de la vida psiquica del ser humano"
let conciencia = "Paradigma"
let paradigmas = [conciencia,conducta,inconciente,cognitivismo,constructivismo]
let antecedentes = "filosofia"
let racionalismo = {
    autor: "Rene Descartes",
    definicion: "Enfasis en la razón como forma de conocer el mundo, introduce el dualismo mente-cuerpo",
    metodo: "Duda metodica",
}
let empirismo = {
    autor: "David Hume",
    definicion: "se enfatiza el uso de los sentidos como metodo de conocimiento del mundo, el dualismo mente-cuerpo sigue vigente",
    metodo: "Uso de los sentidos"
}
let idealismoTrascendental = {
    autor: "Immanuel Kant",
    definicion: "Todo comienza y se efectua sobre la experiencia sensible, pero esta solo es posible gracias a las facultades del entendimiento.",
    metodo: "Experiencia sensible por el entendimiento de la razon"
    //la psicologia no es una ciencia porque el sujeto no puede ser objeto y sujeto a la vez
}
let positivismo = {
    autor: "Auguste Comte",
    //solo es real aquello de lo que puedo probar su existencia usando el metodo cientifico
    definicion: "Paradigma en el que solo la ciencia puede producir conocimiento a traves de la verificacion empirica, rechaza la experiencia subjetiva para producir conocimiento",
    metodo: "Cientifico"
}
//U2
let percepcion = ""
//U6
let comunicacion = {
    definicion:"",
    teorias:[funcionalista,critica,estudiosCulturales]
}
let grupos = {
    roles:[lidezazgos,chivoEmisario,saboteador]
}
let psicologiaGeneral = {
    definicion: "Rama de la psicologia que se ocupa del estudio de los procecos psicologicos(Percepcion,afectividad,motivacion,lenguaje,pensamiento,etc",
    objetoDeEstudio: "los procesos psicologicos del ser humano",
    unidad1:{
        titulo: "Ciencia y paradigmas",
        temas: [ciencia,paradigmas]
    },
    unidad2:{
        titulo:percepcion,
        temas:[inconciente,imagenes,mundo]
    },
    unidad3:{
        titulo:"Procesos motivacionales y afectivos",
        temas: [cognitivismo,inconciente]
    },
    unidad4:{
        titulo:"Pensamiento",
        temas: [inconciente,psicologiaGenetica,socio-historica]
    },
    unidad5: {
        titulo:"Memoria",
        temas:[aprendizaje,memoria,olvido,inconciente]
    },
    unidad6:{
        titulo: "Comunicancion y lenguaje",
        temas:[lenguaje,saussure,psicoanalisis,comunicacion.teorias,regalos,grupos]
    },
    unidad7:{
        titulo: "Identidad",
        temas: [identificacion,identidad,genero,heteronormatividad,diversidad,sistemas]
    }
}