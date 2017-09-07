package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.json.{JsNull,Json,JsString,JsValue}
import java.io.FileWriter
import play.api.Play.current
import java.io.File
 
class HomeWork extends Controller {
	def index = Action { implicit request =>
		Ok(views.html.homework("採番システム"))
	}

	def getJson = Action { implicit request =>
		val source: String = scala.io.Source.fromFile("app/json/number.json").getLines.mkString
		val sendJson: JsValue = Json.parse(source)
        Ok(sendJson)
	}

	def updateJson = Action { implicit request =>
		/*
		val jsonObj   = Json.stringify(request.body.asJson.get)
        val jsonData  = Json.parse(jsonObj)

		val writeFile = Play.Application.getFile("/json/number.json")

		val fw = new FileWriter(writeFile, true)
		fw.write(jsonObj)
		fw.close()

		*/
		
		Ok("test")
	}
}

