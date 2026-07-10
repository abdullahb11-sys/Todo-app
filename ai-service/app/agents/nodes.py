from langchain_core.messages import SystemMessage

from app.models.state import AgentState
from app.agents.prompts import SYSTEM_PROMPT
from app.agents.llm import get_llm


llm = get_llm()


async def assistant_node(state: AgentState):

    messages = [
        SystemMessage(content=SYSTEM_PROMPT),
        *state["messages"],
    ]

    print("\n==============================")
    print("Assistant Node")
    print("==============================")

    response = await llm.ainvoke(messages)

    print(response)

    return {
        "messages": [response]
    }