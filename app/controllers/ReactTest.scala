package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.json.{JsNull,Json,JsString,JsValue}
 
class ReactTest extends Controller {
	def index = Action {
		Ok(views.html.reactTest("Reactのテスト"))
	}
	def getJson = Action {
		println("ここには来てる") 
		val sendJson = Json.toJson(Seq("test1","test2","test3","test4"))
		Ok(sendJson)
	}
}