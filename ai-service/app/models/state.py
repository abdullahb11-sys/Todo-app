from typing import Annotated

from typing_extensions import TypedDict

from langgraph.graph.message import add_messages
from langchain_core.messages import BaseMessage


class AgentState(TypedDict):
    """
    Shared state that flows through the graph.
    """

    messages: Annotated[
        list[BaseMessage],
        add_messages,
    ]