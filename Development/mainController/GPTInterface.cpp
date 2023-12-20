// GPTInterface.cpp
#include "GPTInterface.h"
#include <ArduinoJson.h>
#include <HTTPClient.h>


// TODO:
// Consider asynchronous HTTPS requests

const char* _gpt_token = ""; // TODO: 
                                // Need a better way to store gpt_token (be able to cycle through tokens securely)
                                // a configuration file would be good to start


GPTInterface::GPTInterface(const char* gpt_token) : _gpt_token(gpt_token) {}

String JSON_Payload(const String& gpt_prompt, const String& base64_image) {

    DynamicJsonDocument doc(50000); // Adjust the size to suit your needs
    // TODO: Create a function that dynamically sets doc parameter based on image size.

    // Create properly formatted JSON
    JsonArray messagesArray = doc.createNestedArray("messages");

    JsonObject messageObject = messagesArray.createNestedObject();
    messageObject["role"] = "user";

    JsonArray contentArray = messageObject.createNestedArray("content");

    JsonObject textObject = contentArray.createNestedObject();
    textObject["type"] = "text";
    textObject["text"] = gpt_prompt;

    JsonObject imageObject = contentArray.createNestedObject();
    imageObject["type"] = "image_url";
    JsonObject imageUrlObject = imageObject.createNestedObject("image_url");
    imageUrlObject["url"] = "data:image/jpeg;base64," + base64_image;

    doc["model"] = "gpt-4-vision-preview";
    doc["max_tokens"] = 300;

    String payload;
    serializeJson(doc, payload);

    return payload;
}

String gptRequest(const String& payload, const char* gpt_token) { // 
      // Does the API Communication 
      HTTPClient http;
      http.begin("https://api.openai.com/v1/chat/completions"); // Your API endpoint
      http.addHeader("Content-Type", "application/json");
      http.addHeader("Authorization", "Bearer " + String(gpt_token)); // Your API key

      int httpResponseCode = http.POST(payload);

      String response = "Error on response";

      if (httpResponseCode > 0) {
      response = http.getString();
      Serial.println("API Response:");
      Serial.println(response);
      } else {
      Serial.print("Error on sending POST: ");
      Serial.println(http.errorToString(httpResponseCode));
      }

      http.end();
      
    return response;
}

String getResponse(const String& gpt_prompt, const String& base64_image) {
    // TODO:
    // call Json_payload, feed out paylaod into gpt_request
    // parse output and return
    String payload;
    payload = JSON_Payload(gpt_prompt, base64_image);
    return gptRequest(payload, _gpt_token);
}

String parseResponse(String& response) {
    // To be implemented
    return "";
}

String getParsedResponse(const String& gpt_prompt, const String& base64_image) {
    return "";
}








// JSON Processing
// API Request (return text)
// Text Parser
// Audio to Text
// Text to Audio

