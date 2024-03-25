const { useSelector } = ReactRedux
export function AppFooter() {
    const count = useSelector(storeState => storeState.contactModule.contacts.length)
    return <footer>
<h3>contacts counter :{count}</h3>
<h4>Created by Yahav Gonen & Roi Doron</h4>
    </footer>
}