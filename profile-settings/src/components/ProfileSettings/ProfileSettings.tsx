import React, {useState} from "react";

interface Settings {
  username: string;
  theme: "light" | "dark";
  notifications: boolean;
  tags: string[];
}
const LANGUAGE_OPTIONS = [
  {id: "js", label: "JavaScript"},
  {id: "ts", label: "TypeScript"},
  {id: "py", label: "Python"},
  {id: "rb", label: "Ruby"},
  {id: "go", label: "Go"},
  {id: "rs", label: "Rust"},
  {id: "re", label: "React"},
];

const ProfileSettings = () => {
  const [settings, setSettings] = useState<Settings>({
    username: "Majster",
    theme: "light",
    notifications: true,
    tags: ["re", "js"],
  });

  console.log(settings.tags);

  const setTheme: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSettings((prevUserSettings) => {
      const theme = e.target.value;
      if (theme === "light" || theme === "dark") {
        return {...prevUserSettings, theme: theme};
      }
      return prevUserSettings;
    });
  };

  const setNotifications: React.ChangeEventHandler<HTMLInputElement> = () => {
    setSettings((prevUserSettings) => {
      return {
        ...prevUserSettings,
        notifications: !prevUserSettings.notifications,
      };
    });
  };

  const setTags: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const tagsArray = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    if (tagsArray.length === 1 && settings.tags.length !== 0) {
      const filtredArray = settings.tags.filter(
        (el) => !el.includes(tagsArray.toString())
      );

      setSettings({...settings, tags: filtredArray});
      return;
    }
    setSettings({...settings, tags: tagsArray});
    return;
  };

  return (
    <>
      <h1>Welcome {settings.username} in Settings Menu</h1>
      <input
        type="radio"
        name="ligth-theme"
        id="light"
        value={"light"}
        onChange={setTheme}
        checked={settings.theme === "light"}
      />
      <label htmlFor="light">Light Theme</label>
      <br />
      <input
        type="radio"
        name="ligth-theme"
        id="dark"
        value={"dark"}
        onChange={setTheme}
        checked={settings.theme === "dark"}
      />
      <label htmlFor="dark">Dark Theme</label>
      <br />
      <br />
      <input
        type="checkbox"
        name="notifications"
        id="notifications-box"
        checked={settings.notifications}
        onChange={setNotifications}
      />
      <label htmlFor="notifications-box">Notifications </label>
      <br />
      <br />

      <form onSubmit={(e) => e.preventDefault()} action="">
        <label htmlFor="tags-box">Select yours favorite items: </label>
        <br />

        <select
          style={{width: "10rem", height: "10rem"}}
          name="tags"
          id="tags-box"
          multiple
          value={settings.tags}
          onChange={setTags}
        >
          {LANGUAGE_OPTIONS.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.label}
            </option>
          ))}
        </select>
        <br />
        <button
          onClick={() => setSettings({...settings, tags: []})}
          type="submit"
        >
          Remove All
        </button>
      </form>

      <br />
      {JSON.stringify(settings)}
    </>
  );
};

export default ProfileSettings;
