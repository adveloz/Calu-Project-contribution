import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class TranslateView(APIView):
    def post(self, request):
        text = request.data.get("q")
        source = request.data.get("source", "es")
        target = request.data.get("target", "en")
        format_ = request.data.get("format", "text")

        if not text:
            return Response({"error": "Missing text"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            res = requests.post(
                "https://translate.flossboxin.org.in/translate",
                json={
                    "q": text,
                    "source": source,
                    "target": target,
                    "format": format_
                },
                headers={"Content-Type": "application/json"}
            )
            res.raise_for_status()
            data = res.json()
            return Response({"translatedText": data.get("translatedText", "")})
        except Exception as e:
            return Response({"error": "Translation failed: " + str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
