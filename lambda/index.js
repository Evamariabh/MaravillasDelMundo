/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const DOCUMENT_ID = "jugador";

const DOCUMENT_ID4 = "ayuda";

const DOCUMENT_ID5 = "despedida";

const DOCUMENT_ID6 = "Fallback";

const DOCUMENT_ID7 = "error";

const DOCUMENT_ID8 = "noinfor";

const DOCUMENT_ID9 = "gir";

//YAAAAAAAAAAAAAAAAAAAAA
const datasource9 = {
    "headlineExampleData": {
        "type": "object",
        "backgroundImage": "https://www.delmundo.top/wp-content/uploads/2023/04/7-maravillas-del-mundo.jpg",
        "logoUrl": "https://previews.123rf.com/images/aleksandrax/aleksandrax1711/aleksandrax171100001/89624988-logotipo-para-florer%C3%ADa-arreglo-de-tulipanes-rosas-y-amarillos-en-un-estilo-moderno.jpg"
    }
};

const createDirectivePayload9 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//YAAAAAAAAAAAAAAAAAAAAA
const datasource6 = {
    "headlineExampleData": {
        "type": "object",
        "backgroundImage": "https://cdn.culturagenial.com/es/imagenes/brazil-4809014-1280-cke.jpg",
        "logoUrl": "https://previews.123rf.com/images/aleksandrax/aleksandrax1711/aleksandrax171100001/89624988-logotipo-para-florer%C3%ADa-arreglo-de-tulipanes-rosas-y-amarillos-en-un-estilo-moderno.jpg",
        "textContent": {
            "primaryText": "Lo siento, no puedo ayudarte con eso. Por favor, intenta de nuevo",
            "color": "red"
        }
    }
};

const createDirectivePayload6 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//YAAAAAAAAAAAAAAAAAAAAA
const datasource7 = {
    "headlineExampleData": {
        "type": "object",
        "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaICqv4i6p4vDB6H1nmgmzC4g9htKowEEJA&usqp=CAU",
        "logoUrl": "https://previews.123rf.com/images/aleksandrax/aleksandrax1711/aleksandrax171100001/89624988-logotipo-para-florer%C3%ADa-arreglo-de-tulipanes-rosas-y-amarillos-en-un-estilo-moderno.jpg",
        "textContent": {
            "primaryText": "Lo siento hubo un error,por favor intenta nuevamente",
            "color": "blue"
        }
    }
};

const createDirectivePayload7 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

///YAAAAAAAAAAAAAAAAAAAAA
const datasource = {
    "headlineExampleData": {
        "type": "object",  
        "backgroundImage": "https://www.eoliatravel.com.mx/wp-content/uploads/2022/08/principal_maravillas_mundo.jpg",
        "logoUrl": "https://previews.123rf.com/images/aleksandrax/aleksandrax1711/aleksandrax171100001/89624988-logotipo-para-florer%C3%ADa-arreglo-de-tulipanes-rosas-y-amarillos-en-un-estilo-moderno.jpg",
        "textContent": {
            "primaryText": "Bienvenido te puedo ofrecer informacion sobre las 7 maravillas del mundo",
            "secondaryText": "Por favor puede preguntar lo que quiera"
        },
        "properties": {
            "hintText": "¡Lugares maravillosos !"
        },
        "transformers": [
            {
                "inputPath": "hintText",
                "transformer": "textToHint"
            }
        ]
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//YAAAAAAAAAAAAAAAAAAAAA
const datasource5 = {
    "headlineExampleData": {
        "type": "object",
        "backgroundImage": "https://i.blogs.es/8643d0/7_1/450_1000.jpg",
        "logoUrl": "https://previews.123rf.com/images/aleksandrax/aleksandrax1711/aleksandrax171100001/89624988-logotipo-para-florer%C3%ADa-arreglo-de-tulipanes-rosas-y-amarillos-en-un-estilo-moderno.jpg",
        "textContent": {
            "primaryText": "Adios... Hasta pronto!",
            "secondaryText": "Puedes volver a preguntar cuando quieras"
        }
    }
};

const createDirectivePayload5 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//YAAAAAAAAAAAAAAAAAAAAA
const datasource4 = {
    "headlineExampleData": {
        "type": "object",
        "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwy043ozMcFS7VsJhRscFlZ91DJFNx_rFV_Pl0s_w_J7TjwDCJRZSBgU3Dgh8zrUM-OjI&usqp=CAU",
        "logoUrl": "https://previews.123rf.com/images/aleksandrax/aleksandrax1711/aleksandrax171100001/89624988-logotipo-para-florer%C3%ADa-arreglo-de-tulipanes-rosas-y-amarillos-en-un-estilo-moderno.jpg",
        "textContent": {
            "primaryText": "Puedes pedirme información sobre otro lugar, por ejemplo, que sabes de China o que sabes de Perú"
        }
    }
};

const createDirectivePayload4 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

//YAAAAAAAAAAAAAAAAAAAAA
const datasource8 = {
    "headlineExampleData": {
        "type": "object",
        "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizpnCPikoMnRA1i4TepUGWTmKMi7U0FzYjg&usqp=CAU",
        "logoUrl": "https://previews.123rf.com/images/aleksandrax/aleksandrax1711/aleksandrax171100001/89624988-logotipo-para-florer%C3%ADa-arreglo-de-tulipanes-rosas-y-amarillos-en-un-estilo-moderno.jpg",
        "textContent": {
            "primaryText": "Lo siento hubo un error,por favor intenta nuevamente",
            "color": "red"
        }
    }
};

const createDirectivePayload8 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const lugares ={
    "china":[
        "La Muralla China es un muro fortificado que se construyó alrededor de China, a fin de proteger al imperio de posibles invasores. Fue erigida a lo largo de diversas dinastías, pero la mayor parte se levantó durante la dinastía Ming, que gobernó desde 1368 hasta 1644. La fortificación tiene casi 22 200 kilómetros de longitud, aunque algunas secciones se han perdido. Sus muros tienen una altura aproximada de 7 metros, y el ancho oscila entre 4 y 5 metros."
        
        
    ],
    "mexico":[
        "La historia de México es tan interesante como variada. Chichen Itza, una ciudad maya, fue uno de los centros comerciales con más renombre entre los mayas, y hoy en día se puede contemplar en medio de plena naturaleza.",
        
    ],  
    "peru":[
        "La ciudad situada en las nubes justo en la Cordillera de los Andes fue creada por los incas alrededor del año 1.440, y hoy en día es una auténtica atracción turística muy popular entre los visitantes que recorren Perú. Los visitantes tienen la posibilidad de conocer el hábitat a 2.350 metros de altura de los residentes de los Andes. La gente afirma que este lugar está lleno de magia.",
        
],  

    "brasil":[
        "La estatua de 32 metros del Cristo Redentor es el monumento más icónico de Río de Janeiro. Sus monumentales brazos extendido parecen abrazar a toda la ciudad, y la estatua en sí se ha convertido en un lugar de peregrinación entre los católicos.",

    ],
    
    "roma":[
        "Justo en el corazón de Roma se encuentra el famoso Coliseo, uno de los monumentos más visitados de todo el mundo. Las runas del antiguo anfiteatro todavía irradian un impresionante esplendor aún y datar más de 2.000 atrás.",

    ],
    
}


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido te puedo ofrecer informacion sobre las 7 maravillas del mundo';
        
            if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const informacionfloresIntent = {
  
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'informacionfloresIntent';
    },
    handle(handlerInput){
        const {pais} = handlerInput.requestEnvelope.request.intent.slots;
        let response;
        if(pais && lugares[pais.value]){
            response = lugares[pais.value][Math.floor(Math.random() * lugares[pais.value].length)]
            
        /** if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload9(DOCUMENT_ID9, datasource9);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
            
        } else {
           
            response = "Lo siento, no puedo ayudarte con eso. Por favor, intenta de nuevo,prueba con otro"
              if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload6(DOCUMENT_ID6, datasource6);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }**/
        }
        return handlerInput.responseBuilder
            .speak(response )
            .reprompt(response)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes pedirme otro lugar, por ejemplo, que sabes de "perú" o que sabes de "china';
        
         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload4(DOCUMENT_ID4, datasource4);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '!Adios... Hasta pronto!';
        
           if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload5(DOCUMENT_ID5, datasource5);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no puedo ayudarte con eso. Por favor, intenta de nuevo.';

         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload9(DOCUMENT_ID6, datasource6);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Acabas de activar el intento ${intentName}`;
        
           if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload4(DOCUMENT_ID4, datasource4);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, no puedo realizar esa acción en este momento. Por favor, intenta de nuevo más tarde.';
        console.log(`~~ Error manejado: ${JSON.stringify(error)}`);
        
            if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload7(DOCUMENT_ID7, datasource7);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        informacionfloresIntent,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();