document.addEventListener('DOMContentLoaded', () => {
    // Mock Data based on the screenshot
    const campaigns = [
        {
            id: '50454',
            sort: 1,
            status: 'active',
            type: '系统 (有专页)',
            period: '26/04/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '救援金活动',
            activityType: '-',
            name: '救援金周结算星期一',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商A',
            winCount: '0/2',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: 'pc_preview.png',
            h5Image: 'h5_preview.png'
        },
        {
            id: '50458',
            sort: 4,
            status: 'active',
            type: '自定义',
            period: '26/03/18 至 50/12/31',
            currency: 'VND',
            language: '英文 越南',
            template: '自定义模板',
            activityType: '推广活动',
            name: '12344444443',
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
            sort: 1,
            status: 'active',
            type: '系統 (有專頁)',
            period: '26/03/23 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '救援金活动',
            activityType: '-',
            name: '救援金-百分比 0',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商C',
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
            sort: 5,
            status: 'active',
            type: '系统 (有专页)',
            period: '26/04/10 至 51/01/01',
            currency: 'VND',
            language: '簡體中文',
            template: '砸金蛋活动',
            activityType: '-',
            name: '每日签到奖励',
            preview: false,
            blacklist: '层级A',
            designatedAgent: '代理商A',
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
            sort: 2,
            status: 'active',
            type: '系統 (有專頁)',
            period: '26/05/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '连续性活动',
            activityType: '连续任务',
            name: '节日红包雨',
            preview: true,
            blacklist: '层级A',
            designatedAgent: '代理商A',
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
            sort: 6,
            status: 'active',
            type: '自定义',
            period: '26/06/01 至 50/12/31',
            currency: 'VND',
            language: '英语 越南',
            template: '自定义模板2',
            activityType: '促销',
            name: '特殊促销案',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商B',
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
            sort: 7,
            status: 'inactive',
            type: '系统 (无专页)',
            period: '26/07/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '每天登錄活動',
            activityType: '每日登錄',
            name: '已关闭的旧活动',
            preview: false,
            blacklist: '层级A',
            designatedAgent: '代理商C',
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
            sort: 3,
            status: 'active',
            type: '系统 (无专页)',
            period: '26/08/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '充值優惠活動',
            activityType: '充值优惠',
            name: '周六充值大放送',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商A',
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
            sort: 8,
            status: 'active',
            type: '系统 (无专页)',
            period: '26/09/01 至 51/01/01',
            currency: 'VND',
            language: '英语',
            template: '充值優惠活動',
            activityType: '充值优惠',
            name: '月底充值大回馈',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商B',
            winCount: '2000/50',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: 'USDT',
            minRechargeAmount: '100,000',
            minRechargeCount: '2',
            rechargeSort: '2'
        },
        {
            id: '50510',
            sort: 9,
            status: 'active',
            type: '系统 (无专页)',
            period: '26/10/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '充值優惠活動',
            activityType: '首充奖励',
            name: '新人首充大礼包',
            preview: true,
            blacklist: '层级A',
            designatedAgent: '代理商C',
            winCount: '500/30',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: '银行转账',
            minRechargeAmount: '50,000',
            minRechargeCount: '1',
            rechargeSort: '3'
        },
        {
            id: '50520',
            sort: 10,
            status: 'active',
            type: '系统 (无专页)',
            period: '26/10/15 至 51/01/01',
            currency: 'VND',
            language: '簡體中文',
            template: '充值優惠活動',
            activityType: '累充返利',
            name: '累计充值返大奖',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商A',
            winCount: '800/45',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: 'USDT/銀行轉帳',
            minRechargeAmount: '200,000',
            minRechargeCount: '5',
            rechargeSort: '4'
        },
        {
            id: '50530',
            sort: 11,
            status: 'inactive',
            type: '系统 (无专页)',
            period: '26/11/01 至 50/12/31',
            currency: 'VND',
            language: '英语',
            template: '充值優惠活動',
            activityType: '限时加赠',
            name: '双11充值加赠',
            preview: false,
            blacklist: '层级A',
            designatedAgent: '代理商B',
            winCount: '0/0',
            withdrawRatio: '--',
            auditFailFee: '--',
            rechargeType: '银行转账',
            minRechargeAmount: '30,000',
            minRechargeCount: '1',
            rechargeSort: '5'
        }
    ];

    // State Management
    let isRechargeExpanded = false;
    let sortConfig = { key: null, direction: 'asc' };

    // Code Mapping for Sorting (Priority: SY > SN > CU, then trailing number ascending)
    const getSortWeight = (str) => {
        if (!str) return 999999;
        str = String(str);
        let weight = 0;
        // Check exact prefix or type match
        if (str.includes('SY') || str.includes('有')) weight = 100000;
        else if (str.includes('SN') || str.includes('无') || str.includes('無')) weight = 200000;
        else if (str.includes('CU') || str.includes('自')) weight = 300000;
        else weight = 900000;

        // Parse and add numeric trailing part
        const numMatch = str.match(/\d+/);
        if (numMatch) {
            weight += parseInt(numMatch[0], 10);
        }
        return weight;
    };

    const tableBody = document.getElementById('campaignTableBody');

    // Helper to get display type and badge
    const getTypeDisplay = (type) => {
        let badgeClass = 'badge-custom';
        let displayType = '自定义';
        let group = 'mixed'; // 'sy' for 有专页, 'mixed' for 无专页+自定义

        if (type.includes('有')) {
            badgeClass = 'badge-system';
            displayType = '系統（有专页）';
            group = 'sy';
        } else if (type.includes('无') || type.includes('無')) {
            badgeClass = 'badge-system-none';
            displayType = '系統（无专页）';
            group = 'mixed';
        }
        return { badgeClass, displayType, group };
    };

    // Track if activity type and sort columns are expanded
    let isTemplateColumnsExpanded = false;

    // Render Table Rows
    const renderTable = (data) => {
        tableBody.innerHTML = '';

        // Display actual sort values to show sorting effect
        data.forEach(item => {
            item.displaySort = item.sort;
            renderRow(item);
        });

        // Restore column visibility state
        updateColumnVisibility();
    };

    // Helper function to update column visibility based on expanded state
    const updateColumnVisibility = () => {
        const hiddenCols = document.querySelectorAll('th.hidden-col, td.hidden-col');
        hiddenCols.forEach(col => {
            if (isTemplateColumnsExpanded) {
                col.classList.add('visible');
            } else {
                col.classList.remove('visible');
            }
        });
    };

    const renderRow = (item) => {
        const { badgeClass, displayType } = getTypeDisplay(item.type);
        const statusClass = item.status === 'active' ? 'status-active' : 'status-inactive';
        const statusIcon = item.status === 'active' ? 'ph ph-check' : 'ph ph-x';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td><div class="${statusClass}"><i class="${statusIcon}"></i></div></td>
            <td style="font-size: 11px;">${item.period}</td>
            <td>${item.currency}</td>
            <td>${item.language}</td>
            <td><span class="badge ${badgeClass}">${displayType}</span></td>
            <td class="hidden-col">${item.activityType || '-'}</td>
            <td class="hidden-col"><span class="sort-number" data-id="${item.id}">${item.displaySort}</span></td>
            <td>${item.template}</td>
            <td>${item.name}</td>
            <td>
                <button class="btn btn-upload" onclick="openAssetDrawer('${item.id}')">
                    <i class="ph ph-upload-simple"></i>
                    上傳
                </button>
            </td>
            <td class="preview-detail">
                ${item.rechargeSort !== '--' && item.rechargeSort && item.template !== '救援金活动' ? `<img src="pc_list.png" class="thumbnail-preview" alt="PC Preview">` : '--'}
            </td>
            <td class="preview-detail">
                ${item.rechargeSort !== '--' && item.rechargeSort && item.template !== '救援金活动' ? `<img src="h5_list.png" class="thumbnail-preview" alt="H5 Preview">` : '--'}
            </td>
            <td>${item.blacklist}</td>
            <td>${item.designatedAgent}</td>
            <td>${item.winCount}</td>
            <td>${item.withdrawRatio}</td>
            <td>${item.auditFailFee}</td>
            <td class="recharge-type">${item.template === '充值優惠活動' ? item.rechargeType : '--'}</td>
            <td class="recharge-detail">${item.template === '充值優惠活動' ? item.minRechargeAmount : '--'}</td>
            <td class="recharge-detail">${item.template === '充值優惠活動' ? item.minRechargeCount : '--'}</td>
            <td class="recharge-detail">${item.template === '充值優惠活動' ? (item.rechargeSort || '--') : '--'}</td>
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
    };

    // Default Sort rules
    campaigns.sort((a, b) => getSortWeight(a.sort) - getSortWeight(b.sort));
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
                
                // Weighted sort for 'type'
                if (key === 'type') {
                    valA = getSortWeight(valA);
                    valB = getSortWeight(valB);
                }

                // Numeric sort for 'sort' column
                if (key === 'sort') {
                    const valANum = parseFloat(valA) || 0;
                    const valBNum = parseFloat(valB) || 0;
                    return sortConfig.direction === 'asc' ? valANum - valBNum : valBNum - valANum;
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

                // Activity type sorting - treat '-' as empty/last
                if (key === 'activityType') {
                    const aEmpty = !valA || valA === '-';
                    const bEmpty = !valB || valB === '-';
                    
                    if (aEmpty && bEmpty) return 0;
                    if (aEmpty) return 1;
                    if (bEmpty) return -1;
                    
                    // String comparison for non-empty values
                    valA = String(valA).toLowerCase();
                    valB = String(valB).toLowerCase();
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

    // Template Type Expand Toggle Logic (for Activity Type and Sort columns)
    const templateTypeExpand = document.getElementById('templateTypeExpand');

    templateTypeExpand.addEventListener('click', () => {
        isTemplateColumnsExpanded = !isTemplateColumnsExpanded;
        const icon = templateTypeExpand.querySelector('i');
        icon.className = isTemplateColumnsExpanded ? 'ph ph-minus-circle' : 'ph ph-plus-circle';

        // Toggle column visibility
        updateColumnVisibility();
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

        // Render mock assets based on campaign languages
        const languages = campaign.language ? campaign.language.split(' ') : ['未知'];
        assetTableBody.innerHTML = languages.map((lang) => {
            // For demonstration based on screenshot for ID 50458:
            // "英文" row shows a placeholder for the first cell, "越南" row shows images.
            const isEnglishPlaceholder = campaign.id === '50458' && (lang === '英文' || lang === '英语');
            
            return `
                <tr>
                    <td>${lang}</td>
                    <td>${renderAssetCard(isEnglishPlaceholder ? null : 'pc_list.png', 'pc_list.png')}</td>
                    <td>${renderAssetCard('pc_content.png', 'pc_content.png')}</td>
                    <td>${renderAssetCard('h5_list.png', 'h5_list.png')}</td>
                    <td>${renderAssetCard('h5_content.png', 'h5_content.png')}</td>
                </tr>
            `;
        }).join('');

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
        if (!src) {
            return `
                <div class="asset-card">
                    <div class="asset-placeholder">
                        <i class="ph ph-cloud-arrow-up"></i>
                        <span>上传图片</span>
                        <small>PNG/JPG &le; 1MB</small>
                    </div>
                    <input type="text" class="asset-url-input" value="" placeholder="图片 URL">
                </div>
            `;
        }
        return `
            <div class="asset-card">
                <button class="btn-delete-asset" onclick="this.parentElement.remove()">&times;</button>
                <img src="${src}" alt="${filename}" onclick="window.openImageModal('${src}')">
                <input type="text" class="asset-url-input" value="${src}" placeholder="图片 URL">
            </div>
        `;
    }

    window.openImageModal = (src) => {
        const imageModal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        imageModal.style.display = 'block';
        modalImg.src = src;
    };

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

    // Template Type & Activity Template Cascading Dropdown
    const templateTypeTrigger = document.getElementById('templateTypeTrigger');
    const templateTypeDropdown = document.getElementById('templateTypeDropdown');
    const templateTypeText = document.getElementById('templateTypeText');
    const templateTypeSelectAll = document.getElementById('templateTypeSelectAll');
    const templateTypeOptions = document.querySelectorAll('.template-type-option');
    const activityTemplateFilter = document.getElementById('activityTemplateFilter');

    // Template mapping based on type
    const templateMapping = {
        'SY': ['连续性活动', '每天登录活动', '砸金蛋活动', '救援金活动'],
        'SN': ['充值優惠活動', '注册礼金活动', '三方对局数彩金活动', '三方盈利彩金活动', '周充值优惠活动', '彩票下注期数奖金活动', '下载有奖', '定期宝箱'],
        'CU': []
    };

    // Toggle dropdown
    templateTypeTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        templateTypeDropdown.classList.toggle('open');
        templateTypeTrigger.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        templateTypeDropdown.classList.remove('open');
        templateTypeTrigger.classList.remove('active');
    });

    templateTypeDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Update trigger text based on selection
    const updateTemplateTypeText = () => {
        const checkedOptions = document.querySelectorAll('.template-type-option:checked');
        if (checkedOptions.length === 0) {
            templateTypeText.textContent = '請選擇';
        } else if (checkedOptions.length === templateTypeOptions.length) {
            templateTypeText.textContent = `已選擇全部`;
        } else {
            templateTypeText.textContent = `已選擇 ${checkedOptions.length} 項`;
        }
    };

    // Update activity template dropdown based on selected types
    const updateActivityTemplate = () => {
        const selectedTypes = Array.from(document.querySelectorAll('.template-type-option:checked')).map(opt => opt.value);

        // Clear current options
        activityTemplateFilter.innerHTML = '<option value="">活动模板</option>';

        // Collect all templates from selected types
        const allTemplates = new Set();
        selectedTypes.forEach(type => {
            const templates = templateMapping[type] || [];
            templates.forEach(t => allTemplates.add(t));
        });

        if (allTemplates.size > 0) {
            // Enable dropdown and populate options
            activityTemplateFilter.disabled = false;
            allTemplates.forEach(template => {
                const option = document.createElement('option');
                option.value = template;
                option.textContent = template;
                activityTemplateFilter.appendChild(option);
            });
        } else {
            // Disable if no templates available (no type selected or only custom selected)
            activityTemplateFilter.disabled = true;
        }
    };

    // Handle select all
    templateTypeSelectAll.addEventListener('change', () => {
        templateTypeOptions.forEach(opt => {
            opt.checked = templateTypeSelectAll.checked;
        });
        updateTemplateTypeText();
        updateActivityTemplate();
    });

    // Handle individual options
    templateTypeOptions.forEach(option => {
        option.addEventListener('change', () => {
            const allChecked = Array.from(templateTypeOptions).every(opt => opt.checked);
            const someChecked = Array.from(templateTypeOptions).some(opt => opt.checked);
            templateTypeSelectAll.checked = allChecked;
            templateTypeSelectAll.indeterminate = someChecked && !allChecked;
            updateTemplateTypeText();
            updateActivityTemplate();
        });
    });


    // Filter and Reset Functionality
    const resetFilter = document.getElementById('resetFilter');
    const queryFilter = document.getElementById('queryFilter');
    const statusFilter = document.getElementById('statusFilter');

    // Helper to map template type value to display text for matching
    const getTemplateTypeDisplay = (value) => {
        const mapping = {
            'SY': ['系统 (有专页)', '系統 (有專頁)'],
            'SN': ['系统 (无专页)', '系統 (無專頁)'],
            'CU': ['自定义', '自定義']
        };
        return mapping[value] || [value];
    };

    // Query button - filter data based on selected criteria
    queryFilter.addEventListener('click', () => {
        const selectedTypes = Array.from(document.querySelectorAll('.template-type-option:checked')).map(opt => opt.value);
        const selectedTemplate = activityTemplateFilter.value;
        const selectedStatus = statusFilter.value;

        let filteredData = [...campaigns];

        // Filter by template type
        if (selectedTypes.length > 0) {
            filteredData = filteredData.filter(item => {
                return selectedTypes.some(typeValue => {
                    const displayTexts = getTemplateTypeDisplay(typeValue);
                    return displayTexts.some(text => item.type.includes(text) || item.type === text);
                });
            });
        }

        // Filter by activity template
        if (selectedTemplate) {
            filteredData = filteredData.filter(item => item.template === selectedTemplate);
        }

        // Filter by status
        if (selectedStatus && selectedStatus !== 'all') {
            filteredData = filteredData.filter(item => item.status === selectedStatus);
        }

        // Re-render with filtered data
        renderTable(filteredData);
    });

    // Reset button - clear filters and show all data
    resetFilter.addEventListener('click', () => {
        // Clear template type selection
        templateTypeOptions.forEach(opt => opt.checked = false);
        templateTypeSelectAll.checked = false;
        templateTypeSelectAll.indeterminate = false;
        updateTemplateTypeText();

        // Clear activity template
        activityTemplateFilter.innerHTML = '<option value="">活动模板</option>';
        activityTemplateFilter.disabled = true;

        // Clear status
        statusFilter.value = '';

        // Re-render all data
        renderTable(campaigns);
    });
});
