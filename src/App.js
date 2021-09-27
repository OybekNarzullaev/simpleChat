import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import TopBar from "./components/TopBar";
import "./App.css";

const projectID = "eeb9ac1c-2e89-4f95-aaa8-aa63b6cd7f85";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      <TopBar />
      <ChatEngine
        height="92vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </>
  );
};

// infinite scroll, logout, more customizations...

export default App;
