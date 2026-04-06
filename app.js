document.addEventListener('DOMContentLoaded', () => {
    // Mock Data based on the screenshot
    const campaigns = [
        {
            id: '50454',
            sort: 'SY1',
            status: 'active',
            type: '系统 (有专页)',
            period: '26/04/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '救援金活动',
            name: '救援金周结算星期一',
            preview: true,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '0/2',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '1',
            pcImage: 'pc_preview.png',
            h5Image: 'h5_preview.png'
        },
        {
            id: '50458',
            sort: 'CU1',
            status: 'active',
            type: '自定义',
            period: '26/03/18 至 50/12/31',
            currency: 'VND',
            language: '英文 越南',
            template: '自定义模板',
            name: '1234444443',
            preview: true,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '0/0',
            withdrawRatio: '--',
            auditFailFee: '--',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50461',
            sort: 'SY1',
            status: 'active',
            type: '系統 (有專頁)',
            period: '26/03/23 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '救援金活动',
            name: '救援金-百分比 0',
            preview: true,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '374/8',
            withdrawRatio: '--',
            auditFailFee: '100%',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50465',
            sort: 'SN1',
            status: 'active',
            type: '系统 (无专页)',
            period: '26/04/10 至 51/01/01',
            currency: 'VND',
            language: '簡體中文',
            template: '签到活动',
            name: '每日签到奖励',
            preview: false,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '120/5',
            withdrawRatio: '50%',
            auditFailFee: '--',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50470',
            sort: 'SY2',
            status: 'active',
            type: '系統 (有專頁)',
            period: '26/05/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '红包活动',
            name: '节日红包雨',
            preview: true,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '500/10',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50475',
            sort: 'CU2',
            status: 'active',
            type: '自定义',
            period: '26/06/01 至 50/12/31',
            currency: 'VND',
            language: '英语 越南',
            template: '自定义模板2',
            name: '特殊促销案',
            preview: true,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '50/0',
            withdrawRatio: '--',
            auditFailFee: '--',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50480',
            sort: 'SN2',
            status: 'inactive',
            type: '系统 (无专页)',
            period: '26/07/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '救援金活动',
            name: '已关闭的旧活动',
            preview: false,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '0/0',
            withdrawRatio: '--',
            auditFailFee: '--',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50490',
            sort: 'SY3',
            status: 'active',
            type: '系統 (有專頁)',
            period: '26/08/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '充值返利',
            name: '周六充值大放送',
            preview: true,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '1000/20',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: '银行转账/USDT',
            minRechargeAmount: '20,000',
            minRechargeCount: '1',
            rechargeSort: '1'
        },
        {
            id: '50500',
            sort: 'SY4',
            status: 'active',
            type: '系統 (有專頁)',
            period: '26/09/01 至 51/01/01',
            currency: 'VND',
            language: '英语',
            template: '充值返利',
            name: '月底充值大回馈',
            preview: true,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '2000/50',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: 'USDT',
            minRechargeAmount: '100,000',
            minRechargeCount: '2',
            rechargeSort: '2'
        }
    ];

    // State Management
    let isRechargeExpanded = false;
    let sortConfig = { key: null, direction: 'asc' };

    // Code Mapping for Sorting (English Char + Number)
    const typeWeights = {
        '自定义': 'CU1',
        '系统 (有专页)': 'SY1',
        '系统 (无专页)': 'SN1'
    };

    const tableBody = document.getElementById('campaignTableBody');

    // Render Table Rows
    const renderTable = (data) => {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const badgeClass = item.type === '系统 (有专页)' ? 'badge-system' : 
                              item.type === '系统 (无专页)' ? 'badge-system-none' : 'badge-custom';
            const statusClass = item.status === 'active' ? 'status-active' : 'status-inactive';
            const statusIcon = item.status === 'active' ? 'ph ph-check' : 'ph ph-x';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.sort}</td>
                <td><div class="${statusClass}"><i class="${statusIcon}"></i></div></td>
                <td><span class="badge ${badgeClass}">${item.type}</span></td>
                <td style="font-size: 11px;">${item.period}</td>
                <td>${item.currency}</td>
                <td>${item.language}</td>
                <td>${item.template}</td>
                <td>${item.name}</td>
                <td>
                    <button class="btn btn-upload" onclick="openAssetDrawer('${item.id}')">
                        <i class="ph ph-upload-simple"></i>
                        上傳
                    </button>
                </td>
                <td class="preview-detail">
                    ${item.rechargeSort !== '--' && item.rechargeSort ? `<img src="pc_list.png" class="thumbnail-preview" alt="PC Preview">` : '--'}
                </td>
                <td class="preview-detail">
                    ${item.rechargeSort !== '--' && item.rechargeSort ? `<img src="h5_list.png" class="thumbnail-preview" alt="H5 Preview">` : '--'}
                </td>
                <td>${item.blacklist}</td>
                <td>${item.designatedAgent}</td>
                <td>${item.winCount}</td>
                <td>${item.withdrawRatio}</td>
                <td>${item.auditFailFee}</td>
                <td class="recharge-type">${item.rechargeType}</td>
                <td class="recharge-detail">${item.minRechargeAmount}</td>
                <td class="recharge-detail">${item.minRechargeCount}</td>
                <td class="recharge-detail">${item.rechargeSort || '--'}</td>
                <td>
                    <div class="row-actions">
                        <span class="action-btn btn-close">关闭</span>
                        <span class="action-btn btn-copy">复制</span>
                        <span class="action-btn btn-edit">编辑</span>
                        <span class="action-btn btn-delete">删除</span>
                    </div>
                </td>
            `;
            tableBody.appendChild(row);
        });
    };

    renderTable(campaigns);

    // Sorting Logic
    const headers = document.querySelectorAll('th.sortable');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const key = header.getAttribute('data-sort');
            if (sortConfig.key === key) {
                sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
            } else {
                sortConfig.key = key;
                sortConfig.direction = 'asc';
            }

            // Update Icons
            headers.forEach(h => {
                const icon = h.querySelector('i');
                icon.className = 'ph ph-caret-up-down';
            });
            const activeIcon = header.querySelector('i');
            activeIcon.className = sortConfig.direction === 'asc' ? 'ph ph-caret-up' : 'ph ph-caret-down';

            // Perform Sort
            const sortedData = [...campaigns].sort((a, b) => {
                let valA = a[key];
                let valB = b[key];

                // Numeric sort for ID
                if (key === 'id') {
                    valA = parseFloat(valA) || 0;
                    valB = parseFloat(valB) || 0;
                }
                
                // Alphanumeric sort for 'sort' or weighted sort for 'type'
                if (key === 'type') {
                    valA = typeWeights[valA] || 'Z9';
                    valB = typeWeights[valB] || 'Z9';
                }

                if (key === 'rechargeSort') {
                    const aEmpty = a[key] === '--' || !a[key];
                    const bEmpty = b[key] === '--' || !b[key];
                    
                    if (aEmpty && bEmpty) return 0;
                    if (aEmpty) return 1;
                    if (bEmpty) return -1;

                    const aVal = parseFloat(a[key]);
                    const bVal = parseFloat(b[key]);
                    return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
                }

                if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
                if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });

            renderTable(sortedData);
        });
    });

    // Toggle Filter Section
    const toggleFilter = document.getElementById('toggleFilter');
    const filterBody = document.querySelector('.filter-body');
    const toggleIcon = document.querySelector('.toggle-icon');

    toggleFilter.addEventListener('click', () => {
        filterBody.classList.toggle('collapsed');
        const isCollapsed = filterBody.classList.contains('collapsed');
        toggleIcon.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // Mock Button Interactions
    document.getElementById('addCampaign').addEventListener('click', () => {
        alert('新增活动触发 - 你可以开发一个弹窗来新增活动！');
    });

    document.getElementById('refreshPage').addEventListener('click', () => {
        const btn = document.getElementById('refreshPage');
        const icon = btn.querySelector('i');
        icon.classList.add('ph-spin');
        setTimeout(() => {
            icon.classList.remove('ph-spin');
            renderTable(campaigns);
        }, 800);
    });

    // Recharge Toggle Logic
    const rechargeToggle = document.getElementById('rechargeToggle');
    const campaignTable = document.getElementById('campaignTable');
    
    // Initial state check
    campaignTable.setAttribute('data-recharge-expanded', isRechargeExpanded);

    rechargeToggle.addEventListener('click', () => {
        isRechargeExpanded = !isRechargeExpanded;
        const icon = rechargeToggle.querySelector('i');
        icon.className = isRechargeExpanded ? 'ph ph-minus-circle' : 'ph ph-plus-circle';
        
        campaignTable.setAttribute('data-recharge-expanded', isRechargeExpanded);
    });

    // Preview Detail Toggle Logic
    let isPreviewExpanded = false;
    const previewPlusToggle = document.getElementById('previewPlusToggle');
    campaignTable.setAttribute('data-preview-expanded', isPreviewExpanded);

    previewPlusToggle.addEventListener('click', () => {
        isPreviewExpanded = !isPreviewExpanded;
        const icon = previewPlusToggle.querySelector('i');
        icon.className = isPreviewExpanded ? 'ph ph-minus-circle' : 'ph ph-plus-circle';
        campaignTable.setAttribute('data-preview-expanded', isPreviewExpanded);
    });

    // Asset Drawer Logic
    const assetDrawer = document.getElementById('assetDrawer');
    const assetTableBody = document.getElementById('assetTableBody');

    window.openAssetDrawer = (id) => {
        const campaign = campaigns.find(c => c.id === id);
        if (!campaign) return;

        // Populate info
        document.getElementById('infoName').textContent = campaign.name;
        document.getElementById('infoId').textContent = campaign.id;
        document.getElementById('infoType').textContent = campaign.type;
        document.getElementById('infoTime').textContent = campaign.period;
        document.getElementById('infoTemplate').textContent = campaign.template;
        document.getElementById('infoCurrency').textContent = campaign.currency;

        // Render mock assets
        const languages = ['越南']; 
        assetTableBody.innerHTML = languages.map(lang => `
            <tr>
                <td>${lang}</td>
                <td>${renderAssetCard('pc_list.png', 'pc_list.png')}</td>
                <td>${renderAssetCard('pc_content.png', 'pc_content.png')}</td>
                <td>${renderAssetCard('h5_list.png', 'h5_list.png')}</td>
                <td>${renderAssetCard('h5_content.png', 'h5_content.png')}</td>
            </tr>
        `).join('');

        assetDrawer.classList.add('open');
    };

    window.closeAssetDrawer = () => {
        assetDrawer.classList.remove('open');
    };

    window.saveAssets = () => {
        alert('资产已保存！');
        closeAssetDrawer();
    };

    function renderAssetCard(src, filename) {
        return `
            <div class="asset-card">
                <span class="btn-delete-asset">&times;</span>
                <img src="${src}" alt="${filename}">
                <input type="text" class="asset-url-input" value="${src}" placeholder="圖片 URL">
            </div>
        `;
    }

    // Image Modal Logic
    const imageModal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.modal-close');

    campaignTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('thumbnail-preview')) {
            imageModal.style.display = 'block';
            modalImg.src = e.target.src;
        }
    });

    closeBtn.onclick = () => imageModal.style.display = 'none';
    imageModal.onclick = (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    };

    // Handle Action Clicks
    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('action-btn')) {
            const action = e.target.textContent.trim();
            const rowId = e.target.closest('tr').cells[0].textContent;
            console.log(`Action: ${action} on ID: ${rowId}`);
            // Logic for each action could be added here
        }
    });
});
