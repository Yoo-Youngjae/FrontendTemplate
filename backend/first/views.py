import json


from django.http import HttpResponse, JsonResponse

def first(request):
    return HttpResponse('Hello, World!')
    # if request.method == 'GET':
    #     req_data = json.loads(request.body.decode())

        # newfever = Fever_history(category=req_data['category'],
        #                          user=request.user,
        #                          goalTime=req_data['goalTime'],
        #                          etcCategory=req_data['etcCategory'])

        # return HttpResponse('Hello, World!')
