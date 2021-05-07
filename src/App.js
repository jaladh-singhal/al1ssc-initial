import {
  Layout,
  Menu,
  Breadcrumb,
  List,
  Divider,
  Row,
  Col,
  Typography,
  Image,
} from "antd";

import logo from "./logo.svg";
import "./App.less";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph } = Typography;
const { SubMenu } = Menu;

const data = Array(5).fill(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className="App">
    //   <Button type="primary">Button</Button>
    // </div>
    <Layout>
      <Header className="header" style={{ background: "#fff" }}>
        {/* <div className="logo" /> */}
        <Row>
          <Col
            span={8}
            // align="middle" justify="center"
            // style={{
            //   verticalAlign: "middle",
            //   textAlign: "center",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
          >
            <Title level={3} style={{ marginTop: "15px" }}>
              Aditya-L1 Science Support Cell
            </Title>
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ float: "right" }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              {/* <Menu.Item key="3">Analysis</Menu.Item> */}
              <SubMenu key="3" title="Data Analysis">
                <Menu.Item key="3.1">Software 1</Menu.Item>
                <Menu.Item key="3.2">Software 2</Menu.Item>
                <Menu.Item key="3.3">Software 3</Menu.Item>
              </SubMenu>
              <Menu.Item key="4">Helpdesk</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "3px 0" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Image
          src="https://secchi.nrl.navy.mil/sites/secchi.nrl.navy.mil/files/md-slider-image/SECCHI%20backgrounds-blue-big.jpg"
          preview={false}
        />

        <Layout
          className="site-layout-background"
          style={{ padding: "40px 120px" }}
        >
          <Content style={{ paddingRight: "180px", minHeight: 400 }}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              tortor pretium viverra suspendisse potenti nullam ac tortor.
              Turpis massa sed elementum tempus egestas. Sit amet nisl suscipit
              adipiscing bibendum est. Est placerat in egestas erat. Leo a diam
              sollicitudin tempor id eu nisl. Lorem ipsum dolor sit amet
              consectetur adipiscing elit ut. Risus viverra adipiscing at in.
              Placerat orci nulla pellentesque dignissim enim sit. Amet purus
              gravida quis blandit turpis. Ornare aenean euismod elementum nisi
              quis eleifend. Quis blandit turpis cursus in hac. Sed nisi lacus
              sed viverra tellus in hac habitasse platea. Arcu ac tortor
              dignissim convallis aenean et tortor. Morbi blandit cursus risus
              at. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. In
              tellus integer feugiat scelerisque varius morbi enim nunc. Amet
              cursus sit amet dictum sit amet justo. Magnis dis parturient
              montes nascetur ridiculus mus mauris.
            </Paragraph>
            <Paragraph>
              Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.
              Elit at imperdiet dui accumsan sit amet nulla facilisi morbi.
              Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus.
              Maecenas volutpat blandit aliquam etiam erat velit scelerisque.
              Nec ullamcorper sit amet risus nullam eget felis eget nunc. In hac
              habitasse platea dictumst quisque sagittis. Diam phasellus
              vestibulum lorem sed risus ultricies tristique nulla. In hac
              habitasse platea dictumst vestibulum rhoncus. Faucibus et molestie
              ac feugiat. Sed id semper risus in hendrerit gravida rutrum
              quisque non. Eget duis at tellus at urna. Vitae et leo duis ut
              diam quam. Ultricies lacus sed turpis tincidunt id aliquet.
              Iaculis at erat pellentesque adipiscing commodo elit at. Id
              consectetur purus ut faucibus pulvinar elementum integer.
              Ultricies mi quis hendrerit dolor magna eget est. Nec feugiat in
              fermentum posuere. Sem et tortor consequat id porta nibh venenatis
              cras sed. Sit amet venenatis urna cursus eget nunc.
            </Paragraph>
            {/* <Paragraph>
              Volutpat blandit aliquam etiam erat velit scelerisque in dictum
              non. Nulla porttitor massa id neque aliquam vestibulum morbi
              blandit. Ipsum dolor sit amet consectetur adipiscing. Est
              ullamcorper eget nulla facilisi etiam dignissim diam quis enim.
              Euismod elementum nisi quis eleifend. In ante metus dictum at
              tempor commodo ullamcorper a lacus. Elementum facilisis leo vel
              fringilla est ullamcorper eget nulla facilisi. Feugiat nisl
              pretium fusce id velit. Amet aliquam id diam maecenas ultricies.
              Tempor id eu nisl nunc mi ipsum. Porttitor lacus luctus accumsan
              tortor posuere ac ut. Vitae proin sagittis nisl rhoncus mattis.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend
              donec pretium vulputate. Risus nec feugiat in fermentum. Integer
              enim neque volutpat ac. Sed viverra ipsum nunc aliquet bibendum
              enim facilisis gravida. Volutpat odio facilisis mauris sit amet
              massa.
            </Paragraph> */}
          </Content>
          <Sider className="site-layout-background" width={500} theme="light">
            {/* <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu> */}
            <Divider orientation="left">Recent Updates</Divider>
            <List
              size="large"
              // header={<div>Header</div>}
              // footer={<div>Footer</div>}
              // bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Sider>
        </Layout>
      </Content>
      <Footer
        style={{ background: "#001529", color: "#fff", textAlign: "center" }}
      >
        ©2021 Developed & Maintained by ARIES
      </Footer>
    </Layout>
  );
}

export default App;
