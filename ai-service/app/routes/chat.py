from fastapi import APIRouter

from langchain_core.messages import HumanMessage

from app.schemas.chat import (
    ChatRequest,
    ChatResponse,
)

from app.agents.graph import graph

router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


@router.post(
    "",
    response_model=ChatResponse,
)
async def chat(request: ChatRequest):

    config = {
        "configurable": {
            "thread_id": request.thread_id
        }
    }

    result = await graph.ainvoke(
        {
            "messages": [
                HumanMessage(
                    content=request.message
                )
            ]
        },
        config=config,
    )

    last_message = result["messages"][-1]

    return ChatResponse(
        response=last_message.content
    )