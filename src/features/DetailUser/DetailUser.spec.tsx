import { render, screen } from "@testing-library/react";
import DetailUser from "./DetailUser";
import { getUserInfoFx } from "./model";

const mockUser: UserInfo = {
  id: 2,
  firstName: "Sheldon",
  lastName: "Quigley",
  maidenName: "Cole",
  age: 28,
  gender: "male",
  email: "hbingley1@plala.or.jp",
  phone: "+7 813 117 7139",
  username: "hbingley1",
  birthDate: "2003-08-02",
  image: "https://robohash.org/doloremquesintcorrupti.png",
  bloodGroup: "O+",
  eyeColor: "Brown",
  hair: {
    color: "Blond",
    type: "Curly",
  },
  domain: "51.la",
  ip: "253.240.20.181",
  weight: "2",
};

describe("DetailUser component", () => {
  it("DetailUser should be render loading markup", async () => {
    render(<DetailUser />);
    expect(await screen.findByText(/Загрузка/i)).toBeInTheDocument();
  });
  it("DetailUser should be render and shown", async () => {
    getUserInfoFx.use(() => Promise.resolve(mockUser));
    render(<DetailUser />);
    expect(await screen.findByRole("img")).toBeInTheDocument();
    expect(await screen.findByText(mockUser.firstName)).toBeInTheDocument();
    expect(await screen.findByText(mockUser.lastName)).toBeInTheDocument();
    expect(await screen.findByText(mockUser.maidenName)).toBeInTheDocument();
  });
  it("DetailUser should render error markup", async () => {
    getUserInfoFx.use(() => Promise.reject("error"));
    render(<DetailUser />);

    expect(await screen.findByText(/Ошибка/i)).toBeInTheDocument();
  });
});
