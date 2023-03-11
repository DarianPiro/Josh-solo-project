import { ChatDisplayHeader } from "./ChatDisplayHeader";
import { ChatDisplayMessage } from "./ChatDisplayMessage";
import { ChatDisplayFooter } from "./ChatDisplayFooter";
export function ChatDisplayContainer() {
  return (
    <>
      <div className="chat_display_container">
        <ChatDisplayHeader />
        <ChatDisplayMessage />
        <ChatDisplayFooter />
      </div>
    </>
  );
}
