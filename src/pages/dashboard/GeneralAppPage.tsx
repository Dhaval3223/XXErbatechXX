// import { Helmet } from 'react-helmet-async';
// // @mui
// import { useTheme } from '@mui/material/styles';
// import { Container, Grid, Stack, Button } from '@mui/material';
// // auth
// import { useAuthContext } from '../../auth/useAuthContext';
// // _mock_
// import {
//   _appFeatured,
//   _appAuthors,
//   _appInstalled,
//   _appRelated,
//   _appInvoices,
// } from '../../_mock/arrays';
// // components
// import { useSettingsContext } from '../../components/settings';
// // sections
// import {
//   AppWidget,
//   AppWelcome,
//   AppFeatured,
//   AppNewInvoice,
//   AppTopAuthors,
//   AppTopRelated,
//   AppAreaInstalled,
//   AppWidgetSummary,
//   AppCurrentDownload,
//   AppTopInstalledCountries,
// } from '../../sections/@dashboard/general/app';
// // assets
// import { SeoIllustration } from '../../assets/illustrations';

// // ----------------------------------------------------------------------

// export default function GeneralAppPage() {
//   const { user } = useAuthContext();

//   const theme = useTheme();

//   const { themeStretch } = useSettingsContext();

//   return (
//     <>
//       <Helmet>
//         <title> General: App | Minimal UI</title>
//       </Helmet>

//       <Container maxWidth={themeStretch ? false : 'xl'}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8}>
//             <AppWelcome
//               title={`Welcome back! \n ${user?.displayName}`}
//               description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
//               img={
//                 <SeoIllustration
//                   sx={{
//                     p: 3,
//                     width: 360,
//                     margin: { xs: 'auto', md: 'inherit' },
//                   }}
//                 />
//               }
//               action={<Button variant="contained">Go Now</Button>}
//             />
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <AppFeatured list={_appFeatured} />
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <AppWidgetSummary
//               title="Total Active Users"
//               percent={2.6}
//               total={18765}
//               chart={{
//                 colors: [theme.palette.primary.main],
//                 series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <AppWidgetSummary
//               title="Total Installed"
//               percent={0.2}
//               total={4876}
//               chart={{
//                 colors: [theme.palette.info.main],
//                 series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <AppWidgetSummary
//               title="Total Downloads"
//               percent={-0.1}
//               total={678}
//               chart={{
//                 colors: [theme.palette.warning.main],
//                 series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} md={6} lg={4}>
//             <AppCurrentDownload
//               title="Current Download"
//               chart={{
//                 colors: [
//                   theme.palette.primary.main,
//                   theme.palette.info.main,
//                   theme.palette.error.main,
//                   theme.palette.warning.main,
//                 ],
//                 series: [
//                   { label: 'Mac', value: 12244 },
//                   { label: 'Window', value: 53345 },
//                   { label: 'iOS', value: 44313 },
//                   { label: 'Android', value: 78343 },
//                 ],
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} md={6} lg={8}>
//             <AppAreaInstalled
//               title="Area Installed"
//               subheader="(+43%) than last year"
//               chart={{
//                 categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//                 series: [
//                   {
//                     year: '2019',
//                     data: [
//                       { name: 'Asia', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
//                       { name: 'America', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
//                     ],
//                   },
//                   {
//                     year: '2020',
//                     data: [
//                       { name: 'Asia', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
//                       { name: 'America', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
//                     ],
//                   },
//                 ],
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} lg={8}>
//             <AppNewInvoice
//               title="New Invoice"
//               tableData={_appInvoices}
//               tableLabels={[
//                 { id: 'id', label: 'Invoice ID' },
//                 { id: 'category', label: 'Category' },
//                 { id: 'price', label: 'Price' },
//                 { id: 'status', label: 'Status' },
//                 { id: '' },
//               ]}
//             />
//           </Grid>

//           <Grid item xs={12} md={6} lg={4}>
//             <AppTopRelated title="Top Related Applications" list={_appRelated} />
//           </Grid>

//           <Grid item xs={12} md={6} lg={4}>
//             <AppTopInstalledCountries title="Top Installed Countries" list={_appInstalled} />
//           </Grid>

//           <Grid item xs={12} md={6} lg={4}>
//             <AppTopAuthors title="Top Authors" list={_appAuthors} />
//           </Grid>

//           <Grid item xs={12} md={6} lg={4}>
//             <Stack spacing={3}>
//               <AppWidget
//                 title="Conversion"
//                 total={38566}
//                 icon="eva:person-fill"
//                 chart={{
//                   series: 48,
//                 }}
//               />

//               <AppWidget
//                 title="Applications"
//                 total={55566}
//                 icon="eva:email-fill"
//                 color="info"
//                 chart={{
//                   series: 75,
//                 }}
//               />
//             </Stack>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }

import { Helmet } from 'react-helmet-async';
import { paramCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import {
  Tab,
  Tabs,
  Card,
  Table,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  TableContainer,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// @types
import { IUserAccountGeneral } from '../../@types/user';
// _mock_
import { _userList } from '../../_mock/arrays';
// components
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import ConfirmDialog from '../../components/confirm-dialog';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from '../../components/table';
// sections
import { UserTableToolbar, UserTableRow } from '../../sections/@dashboard/user/list';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = ['all', 'active', 'banned'];

const ROLE_OPTIONS = [
  'all',
  'ux designer',
  'full stack designer',
  'backend developer',
  'project manager',
  'leader',
  'ui designer',
  'ui/ux designer',
  'front end developer',
  'full stack developer',
];

const TABLE_HEAD = [
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'company', label: 'Company', align: 'left' },
  { id: 'role', label: 'Role', align: 'left' },
  { id: 'isVerified', label: 'Verified', align: 'center' },
  // { id: 'status', label: 'Status', align: 'left' },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function UserListPage() {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const { themeStretch } = useSettingsContext();

  const navigate = useNavigate();

  const [tableData, setTableData] = useState(_userList);

  const [filterName, setFilterName] = useState('');

  const [filterRole, setFilterRole] = useState('all');

  const [openConfirm, setOpenConfirm] = useState(false);

  const [filterStatus, setFilterStatus] = useState('all');

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
    filterRole,
    filterName,
    filterStatus,
  });

  const dataInPage = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const denseHeight = dense ? 52 : 72;

  const isFiltered = filterName !== '' || filterRole !== 'all' || filterStatus !== 'all';

  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterRole) ||
    (!dataFiltered.length && !!filterStatus);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleFilterStatus = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    setPage(0);
    setFilterStatus(newValue);
  };

  const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleFilterRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterRole(event.target.value);
  };

  const handleDeleteRow = (id: string) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);

    if (page > 0) {
      if (dataInPage.length < 2) {
        setPage(page - 1);
      }
    }
  };

  const handleDeleteRows = (selectedRows: string[]) => {
    const deleteRows = tableData.filter((row) => !selectedRows.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);

    if (page > 0) {
      if (selectedRows.length === dataInPage.length) {
        setPage(page - 1);
      } else if (selectedRows.length === dataFiltered.length) {
        setPage(0);
      } else if (selectedRows.length > dataInPage.length) {
        const newPage = Math.ceil((tableData.length - selectedRows.length) / rowsPerPage) - 1;
        setPage(newPage);
      }
    }
  };

  const handleEditRow = (id: string) => {
    navigate(PATH_DASHBOARD.user.edit(paramCase(id)));
  };

  const handleResetFilter = () => {
    setFilterName('');
    setFilterRole('all');
    setFilterStatus('all');
  };

  return (
    <>
      <Helmet>
        <title> Role: List | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Role List"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Role', href: PATH_DASHBOARD.user.root },
            { name: 'List' },
          ]}
          // action={
          //   <Button
          //     component={RouterLink}
          //     to={PATH_DASHBOARD.user.new}
          //     variant="contained"
          //     startIcon={<Iconify icon="eva:plus-fill" />}
          //   >
          //     New User
          //   </Button>
          // }
        />

        <Card>
          <Tabs
            value={filterStatus}
            onChange={handleFilterStatus}
            sx={{
              px: 2,
              bgcolor: 'background.neutral',
            }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab key={tab} label={tab} value={tab} />
            ))}
          </Tabs>

          <Divider />

          <UserTableToolbar
            isFiltered={isFiltered}
            filterName={filterName}
            filterRole={filterRole}
            optionsRole={ROLE_OPTIONS}
            onFilterName={handleFilterName}
            onFilterRole={handleFilterRole}
            onResetFilter={handleResetFilter}
          />

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={dense}
              numSelected={selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={handleOpenConfirm}>
                    <Iconify icon="eva:trash-2-outline" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <UserTableRow
                        key={row.id}
                        row={row}
                        selected={selected.includes(row.id)}
                        onSelectRow={() => onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onEditRow={() => handleEditRow(row.name)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                  />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
            //
            dense={dense}
            onChangeDense={onChangeDense}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows(selected);
              handleCloseConfirm();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  comparator,
  filterName,
  filterStatus,
  filterRole,
}: {
  inputData: IUserAccountGeneral[];
  comparator: (a: any, b: any) => number;
  filterName: string;
  filterStatus: string;
  filterRole: string;
}) {
  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    inputData = inputData.filter(
      (user) => user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== 'all') {
    inputData = inputData.filter((user) => user.status === filterStatus);
  }

  if (filterRole !== 'all') {
    inputData = inputData.filter((user) => user.role === filterRole);
  }

  return inputData;
}
